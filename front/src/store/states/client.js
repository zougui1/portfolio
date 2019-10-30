import { DynamicState, Middleware, mapState } from 'dynamic-redux';
import i18n from 'i18next';

const clientState = new DynamicState('client', {
  isLogged: false,
  language: '',
});

clientState.createActions({
  isLogged: 'set',
  language: 'set',
});

clientState.createMiddlewares([
  new Middleware('language', 'set').callback(store => next => action => {
    action.payload = action.payload.split('-')[0];

    const state = mapState('client: language')(store.getState());

    if (action.payload !== state.language) {
      i18n.changeLanguage(action.payload);
      next();
    }
  }),
]);

export default clientState;
