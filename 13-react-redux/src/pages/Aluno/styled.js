import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    text-align: center;
    width: 100%;
  }

  input {
    display: block;
    height: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
    width: 100%;
  }
`;
