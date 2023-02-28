import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import CustomWrapper from './CustomWrapper';
import TemplateDefault from '../templates/Default';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<TemplateDefault Component={Page404} />}
      element={<TemplateDefault />}
    >
      <Route path="/" element={<Alunos />} />
      <Route exact path="/aluno/:id/edit" element={<CustomWrapper />}>
        <Route exact path="/aluno/:id/edit" element={<Aluno />} />
      </Route>
      <Route exact path="/aluno" element={<CustomWrapper />}>
        <Route exact path="/aluno" element={<Aluno />} />
      </Route>
      <Route path="/fotos/:id" element={<Fotos />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Route>
  )
);

export default router;
