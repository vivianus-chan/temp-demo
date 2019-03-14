export default {
  get: key => {
    if (!window.sessionStorage) return false
    let value = window.sessionStorage.getItem(key);
    return value?JSON.parse(value) :'';
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, data?JSON.stringify(data):'')
    return true
  },
  remove: key => {
    if (!window.sessionStorage) return false
    if(this.has(key)) window.sessionStorage.removeItem(key)
    return true
  },
  has: key => window.sessionStorage && window.sessionStorage.hasOwnProperty(key),
  getLocal: key => {
    if (!window.localStorage) return false
    let value = window.localStorage.getItem(key);
    return value?JSON.parse(value) :'';
  },
  setLocal: (key, data) => {
    if (!window.localStorage) return false
    window.localStorage.setItem(key, data?JSON.stringify(data):'')
    return true
  },
  removeLocal: key => {
    if (!window.localStorage) return false
    if(this.has(key)) window.localStorage.removeItem(key)
    return true
  },
  hasLocal: key => window.localStorage && window.localStorage.hasOwnProperty(key)
}
