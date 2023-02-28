import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();
  const {
    user: { nome, email, id },
    isLoading,
  } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { value, name } = e.target;

    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  }

  useEffect(() => {
    if (!id) return;
    setForm({
      name: nome,
      email,
      password: '',
    });
  }, [id, nome, email]);

  async function handleSubmit(event) {
    event.preventDefault();
    let formErrors = false;

    if (form.name.length < 3 || form.name.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(form.email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (form.password.length < 6 || form.password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ id, ...form }));
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container>
        <h1>{id ? 'Edite sua Conta' : 'Crie sua conta'}</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </label>

          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={
                id ? 'Sua senha (Deixe vazio para não alterar)' : 'Sua senha'
              }
            />
          </label>

          <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
        </Form>
      </Container>
    </>
  );
}
