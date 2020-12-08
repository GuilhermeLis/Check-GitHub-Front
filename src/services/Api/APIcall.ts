import { api } from './api';

import { authorsType } from '~/Context/Context';

export async function authorsRequest(): Promise<authorsType[]> {
  const { data } = await api.get('/author');
  return data;
}

export async function authorByAddintionsRequest(): Promise<authorsType[]> {
  const { data } = await api.get('/authorByAddintions');
  return data;
}

export async function authorByRemovalsRequest(): Promise<authorsType[]> {
  const { data } = await api.get('/authorByRemovals');
  return data;
}
