import { createProvider } from '../../../utils';

export const Home = createProvider(
  'Home',
  () => import(/* webpackChunkName: "Home" */ '../../Pages/Home'),
);
