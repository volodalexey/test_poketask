import { createContext } from 'react';
import { type MainClient } from './main.client';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ClientContext = createContext<MainClient>({} as MainClient);
