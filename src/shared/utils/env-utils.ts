import { IS_NODE_ENV } from '../../config/env.config';

export const isDevelopment = () => IS_NODE_ENV === 'development';
