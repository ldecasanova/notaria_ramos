import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DetalleBlog from './pages/DetalleBlog';
import ConsultarTramite from './pages/ConsultarTramite';
import Contacto from './pages/Contacto';
import DetalleServicio from './pages/DetalleServicio';
import DetalleTramite from './pages/DetalleTramite';
import Error404 from './pages/Error404';
import LibroDeReclamaciones from './pages/LibroDeReclamaciones';
import ListadoServicios1 from './pages/ListadoServicios1';
import ListadoServicios2 from './pages/ListadoServicios2';
import ListadoTramites from './pages/ListadoTramites';
import MensajeEnviado from './pages/MensajeEnviado';
import Nosotros from './pages/Nosotros';
import NuestroEquipo from './pages/NuestroEquipo';
import PoliticasDePrivacidad from './pages/PoliticasDePrivacidad';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="listado-servicios-1" element={<ListadoServicios1 />} />
        <Route path="listado-servicios-2" element={<ListadoServicios2 />} />
        <Route path="detalle-servicio" element={<DetalleServicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="nuestro-equipo" element={<NuestroEquipo />} />
        <Route path="listado-tramites" element={<ListadoTramites />} />
        <Route path="detalle-tramite" element={<DetalleTramite />} />
        <Route path="consultar-tramite" element={<ConsultarTramite />} />
        <Route path="blog" element={<Blog />} />
        <Route path="detalle-blog" element={<DetalleBlog />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="libro-de-reclamaciones" element={<LibroDeReclamaciones />} />
        <Route path="politicas-de-privacidad" element={<PoliticasDePrivacidad />} />
        <Route path="mensaje-enviado" element={<MensajeEnviado />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
