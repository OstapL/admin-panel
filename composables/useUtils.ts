export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

export function isNotEmptyObject(value) {
  return isObject(value) && Boolean(Object.keys(value).length);
}
