import { asynchronify } from './asynchronify';

/**
 * @param {String} name name of the page
 * @param {Function} provider component provider
 * @param {String[]} namespaces translation file names
 * @returns {JSX.Element}
 */
export const createProvider = (name, provider, namespaces = []) => asynchronify(name, provider, namespaces);
