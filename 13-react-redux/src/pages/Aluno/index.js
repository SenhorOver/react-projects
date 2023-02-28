import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Aluno() {
  const { id } = useParams();
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    idade: '',
    peso: '',
    altura: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>{id ? 'Editar aluno' : 'Novo Aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome
          <input
            name="sobrenome"
            type="text"
            value={form.sobrenome}
            onChange={handleChange}
            placeholder="Sobrenome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>

        <label htmlFor="idade">
          Idade
          <input
            name="idade"
            type="text"
            value={form.idade}
            onChange={handleChange}
            placeholder="Idade"
          />
        </label>

        <label htmlFor="peso">
          Peso
          <input
            name="peso"
            type="text"
            value={form.peso}
            onChange={handleChange}
            placeholder="Peso"
          />
        </label>

        <label htmlFor="altura">
          Altura
          <input
            name="altura"
            type="text"
            value={form.altura}
            onChange={handleChange}
            placeholder="Altura"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
