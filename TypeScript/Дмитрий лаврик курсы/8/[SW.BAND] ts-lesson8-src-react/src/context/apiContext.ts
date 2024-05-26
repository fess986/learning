import { createContext } from 'react';
import { TApi } from '../api';

const apiContext = createContext<TApi | null>(null);

export default apiContext;