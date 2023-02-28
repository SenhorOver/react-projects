import { createReducer } from '@reduxjs/toolkit';
import {
  clicaBotaoFailure,
  clicaBotaoRequest,
  clicaBotaoSuccess,
} from './actions';

const initialState = {
  botaoClicado: false,
  operationState: 'stopped',
};

const botaoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clicaBotaoRequest, (state) => {
      const opState = 'request';
      return {
        operationState: opState,
        botaoClicado: state.botaoClicado,
      };
    })
    .addCase(clicaBotaoSuccess, (state) => {
      const newState = !state.botaoClicado;
      const opState = 'success';
      return {
        botaoClicado: newState,
        operationState: opState,
      };
    })
    .addCase(clicaBotaoFailure, (state) => {
      const opState = 'errored';
      return {
        operationState: opState,
        botaoClicado: state.botaoClicado,
      };
    });
});

export default botaoReducer;
