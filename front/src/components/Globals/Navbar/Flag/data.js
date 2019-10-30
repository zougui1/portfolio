export const flagsData = {
  fr: {
    name: 'fr',
    src: require('../../../../assets/images/flags/fr.png'),
    alt: 'fr flag',
    target: () => flagsData.en
  },

  en: {
    name: 'en',
    src: require('../../../../assets/images/flags/en.png'),
    alt: 'en flag',
    target: () => flagsData.fr
  }
}
