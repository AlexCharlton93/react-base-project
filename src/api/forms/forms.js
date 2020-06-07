/**
 * Mocking client-server processing
 */
import _forms from './forms.json';

const TIMEOUT = 100;

export default {
  getForms: (cb, timeout) => setTimeout(() => cb(_forms), timeout || TIMEOUT)
}
