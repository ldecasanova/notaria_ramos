import { useState, type ChangeEvent } from 'react';

const MAX_FILE_BYTES = 10_000_000;

type Props = {
  id: string;
  name: string;
  /** Clase de validación, p. ej. `validate[custom[validateMIME[jpg|jpeg|png]]` */
  validation?: string;
  errorMessage?: string;
  placeholder: string;
  hint: string;
  labelClassName?: string;
};

/**
 * Input de archivo con el diseño original (.g5-input-file): muestra el nombre del
 * archivo elegido si pesa menos de 10 MB; si no, vuelve al texto inicial.
 */
export default function FileInput({ id, name, validation, errorMessage, placeholder, hint, labelClassName = '' }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file && file.size < MAX_FILE_BYTES ? file.name : null);
  };

  return (
    <div className="g5-select g5-input-file">
      <input
        id={id}
        type="file"
        name={name}
        className={validation}
        data-errormessage-custom-error={errorMessage}
        onChange={handleChange}
      />{' '}
      <label className={labelClassName} htmlFor={id}>
        <i className="g5-icoinput icon-adjunta"></i>{' '}
        <div className={`g5-text-input${fileName ? ' completed' : ''}`}>{fileName ?? placeholder}</div>
        <div className="g5-inpufile-text">{hint}</div>
      </label>
    </div>
  );
}
