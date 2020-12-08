import { api } from './api';

import { authorsType } from '~/Context/Context';

export async function authorsRequest(): Promise<authorsType[]> {
  const { data } = await api.get('/author');
  return data;
}
