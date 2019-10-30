export const setLanguage = thisArg =>
  () =>
    thisArg.props.setLanguage(thisArg.props.language === 'fr' ? 'en' : 'fr');
