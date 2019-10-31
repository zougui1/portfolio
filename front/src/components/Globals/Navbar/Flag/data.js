export const flagsData = {
  fr: {
    name: 'fr',
    src: require('../../../../assets/images/flags/fr.png'),
    target: () => flagsData.en
  },

  en: {
    name: 'en',
    src: require('../../../../assets/images/flags/en.png'),
    target: () => flagsData.fr
  }
}
