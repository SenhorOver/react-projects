import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    border-radius: 4px;
  }

  input:focus {
    border: 2px solid ${colors.primaryColor};
  }
`;
