import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const prevPath = get(location, 'state.location.pathname', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;

    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(form.email)) {
      formErrors = true;
    }

    if (form.password.length < 6 || form.password.length > 50) {
      formErrors = true;
    }

    if (formErrors) {
      toast.error('E-mail e/ou senha inválido');
      return;
    }

    dispatch(actions.loginRequest({ ...form, prevPath }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            value={Form.email}
            onChange={handleChange}
            placeholder="Seu email"
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={Form.password}
            onChange={handleChange}
            placeholder="Sua senha"
          />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
