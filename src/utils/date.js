export function getDate() {
  return new Date().toString();
}

export function formatDate(date, locale) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  let formattedDate = new Date(date).toLocaleDateString(locale, options);
  if (locale === 'pt-BR') {
    formattedDate = formattedDate.replace(' às ', ', ');
  }
  return formattedDate;
}
