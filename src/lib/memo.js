export default (f, c = {}) =>
  (k, ...r) =>
    k in c ? c[k] : (c[k] = f(k, ...r))
