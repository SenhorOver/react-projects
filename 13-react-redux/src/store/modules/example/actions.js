import { createAction } from '@reduxjs/toolkit';
import * as types from '../types';

export const clicaBotaoRequest = createAction(types.BOTAO_CLICADO_REQUEST);
export const clicaBotaoSuccess = createAction(types.BOTAO_CLICADO_SUCCESS);
export const clicaBotaoFailure = createAction(types.BOTAO_CLICADO_FAILURE);
