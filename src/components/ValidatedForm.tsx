import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type FormEvent,
  type FormHTMLAttributes,
} from 'react';

/**
 * Reemplaza jquery.validationEngine + los scripts de formulario de cada página:
 *  - Valida los campos según su clase `validate[...]` (required, custom[email],
 *    custom[onlyNumberSp], custom[validateMIME[jpg|png]]).
 *  - Muestra los mensajes con el mismo estilo (.formError) arriba a la izquierda
 *    del campo y los oculta a los 2 segundos.
 *  - Efecto de "levantar label" (.inFocus / .fijar) de los inputs .form-input.
 *  - Filtros de teclado para .soloNumber y .soloLetters.
 */

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FieldError = { id: number; message: string; top: number; left: number };

export type ValidatedFormProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  /** Se llama cuando todos los campos son válidos. */
  onValidSubmit?: (form: HTMLFormElement, data: FormData) => void;
};

const AUTO_HIDE_MS = 2000;
const MAX_FILE_BYTES = 10_000_000;

const MESSAGES = {
  required: '* Este campo es obligatorio',
  requiredSelect: '* Selecciona una opción',
  requiredCheckbox: '* Debes marcar esta casilla',
  requiredRadio: '* Selecciona una opción',
  email: '* Correo electrónico no válido',
  onlyNumberSp: '* Solo se permiten números',
  mime: '* Formato de archivo no permitido',
  fileSize: '* El archivo no debe superar los 10 MB',
  minSize: (n: number) => `* Mínimo ${n} caracteres`,
  maxSize: (n: number) => `* Máximo ${n} caracteres`,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NUMBER_SP_RE = /^[0-9 ]+$/;
const NOT_NUMBER_RE = /\D/g;
const NOT_LETTER_RE = /[^A-Za-zÁÉÍÓÚáéíóúÑñ \-]/g;

function isField(el: EventTarget | null): el is Field {
  return el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement;
}

/** Lee las reglas de `validate[required,custom[email]]` desde el className. */
function parseRules(className: string) {
  const match = className.match(/validate\[(.*)$/);
  if (!match) return null;
  const body = match[1];
  const size = (name: string) => {
    const m = body.match(new RegExp(`${name}\\[(\\d+)\\]`));
    return m ? Number(m[1]) : undefined;
  };
  return {
    required: /(^|,)required\b/.test(body),
    customs: [...body.matchAll(/custom\[(\w+)(?:\[([^\]]*)\])?/g)].map((m) => ({ name: m[1], arg: m[2] })),
    minSize: size('minSize'),
    maxSize: size('maxSize'),
  };
}

function validateField(field: Field, form: HTMLFormElement): string | null {
  const rules = parseRules(field.className);
  if (!rules) return null;
  const customMessage = field.dataset.errormessageCustomError;

  if (field instanceof HTMLInputElement && (field.type === 'checkbox' || field.type === 'radio')) {
    if (!rules.required) return null;
    if (field.type === 'checkbox') return field.checked ? null : MESSAGES.requiredCheckbox;
    const group = form.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${CSS.escape(field.name)}"]`);
    return [...group].some((r) => r.checked) ? null : MESSAGES.requiredRadio;
  }

  if (field instanceof HTMLInputElement && field.type === 'file') {
    const file = field.files?.[0];
    if (!file) return rules.required ? (customMessage ?? MESSAGES.required) : null;
    if (file.size >= MAX_FILE_BYTES) return MESSAGES.fileSize;
    for (const rule of rules.customs) {
      if (rule.name === 'validateMIME' && rule.arg) {
        const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
        if (!rule.arg.toLowerCase().split('|').includes(ext)) return customMessage ?? MESSAGES.mime;
      }
    }
    return null;
  }

  const value = field.value.trim();
  if (!value) {
    if (!rules.required) return null;
    return field instanceof HTMLSelectElement ? MESSAGES.requiredSelect : MESSAGES.required;
  }
  for (const rule of rules.customs) {
    if (rule.name === 'email' && !EMAIL_RE.test(value)) return customMessage ?? MESSAGES.email;
    if (rule.name === 'onlyNumberSp' && !NUMBER_SP_RE.test(value)) return customMessage ?? MESSAGES.onlyNumberSp;
  }
  if (rules.minSize !== undefined && value.length < rules.minSize) return MESSAGES.minSize(rules.minSize);
  if (rules.maxSize !== undefined && value.length > rules.maxSize) return MESSAGES.maxSize(rules.maxSize);
  return null;
}

/** Elemento visible sobre el que se ubica el mensaje (los radios/checkbox suelen estar ocultos). */
function anchorFor(field: Field, form: HTMLFormElement): Element {
  const rect = field.getBoundingClientRect();
  if (rect.width > 0 || rect.height > 0) return field;
  const label = field.id ? form.querySelector(`label[for="${CSS.escape(field.id)}"]`) : null;
  return label ?? field.parentElement ?? field;
}

/** Sube el label cuando el campo tiene contenido (clase .fijar). */
function syncFloatingLabel(field: Field) {
  if (!field.classList.contains('form-input')) return;
  field.nextElementSibling?.classList.toggle('fijar', field.value.length > 0);
}

export default function ValidatedForm({ onValidSubmit, children, style, ...rest }: ValidatedFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldError[]>([]);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  const showErrors = useCallback((list: FieldError[]) => {
    setErrors(list);
    window.clearTimeout(hideTimer.current);
    if (list.length) hideTimer.current = window.setTimeout(() => setErrors([]), AUTO_HIDE_MS);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formRect = form.getBoundingClientRect();
    const found: FieldError[] = [];
    const reportedRadioGroups = new Set<string>();

    for (const el of Array.from(form.elements)) {
      if (!isField(el)) continue;
      // Un solo mensaje por grupo de radios.
      if (el.type === 'radio' && reportedRadioGroups.has(el.name)) continue;
      const message = validateField(el, form);
      if (!message) continue;
      if (el.type === 'radio') reportedRadioGroups.add(el.name);
      const rect = anchorFor(el, form).getBoundingClientRect();
      found.push({ id: found.length, message, top: rect.top - formRect.top, left: rect.left - formRect.left });
    }

    showErrors(found);
    if (found.length) {
      console.log('error: campos vacios');
      return;
    }
    if (onValidSubmit) onValidSubmit(form, new FormData(form));
    else console.log('formulario OK', Object.fromEntries(new FormData(form)));
  };

  const handleFocus = (event: FocusEvent<HTMLFormElement>) => {
    const field = event.target;
    if (!isField(field) || !field.classList.contains('form-input')) return;
    field.closest('.g5-item-input')?.classList.add('inFocus');
    syncFloatingLabel(field);
  };

  const handleBlur = (event: FocusEvent<HTMLFormElement>) => {
    const field = event.target;
    if (!isField(field) || !field.classList.contains('form-input')) return;
    field.closest('.g5-item-input')?.classList.remove('inFocus');
  };

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
    const pattern = field.classList.contains('soloNumber') ? NOT_NUMBER_RE
      : field.classList.contains('soloLetters') ? NOT_LETTER_RE
      : null;
    if (pattern && pattern.test(field.value)) field.value = field.value.replace(pattern, '');
  };

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    if (isField(event.target)) syncFloatingLabel(event.target);
  };

  const handleReset = () => {
    setErrors([]);
    formRef.current?.querySelectorAll('.input-label.fijar').forEach((l) => l.classList.remove('fijar'));
  };

  return (
    <form
      ref={formRef}
      noValidate
      {...rest}
      style={{ position: 'relative', ...style }}
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInput={handleInput}
      onChange={handleChange}
      onReset={handleReset}
    >
      {children}
      {errors.map((error) => (
        <div
          key={error.id}
          className="formError"
          style={{ top: error.top, left: error.left, transform: 'translateY(-100%)', marginTop: -2 }}
          onClick={() => setErrors((list) => list.filter((e) => e.id !== error.id))}
        >
          <div className="formErrorContent">{error.message}</div>
          <div className="formErrorArrow">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((n) => <div key={n} className={`line${n}`}></div>)}
          </div>
        </div>
      ))}
    </form>
  );
}
