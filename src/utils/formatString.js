export function normalizeString(inputString) {
  return inputString
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ç]/g, 'c')
    .replace(/[^\w\s]/gi, '');
}

export function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sentenceToKebab(string) {
  const normalizedString = normalizeString(string.toLowerCase());
  return normalizedString.replace(/\s+/g, '-');
}

export function kebabToSentence(string) {
  return string.replace(/-/g, ' ');
}
