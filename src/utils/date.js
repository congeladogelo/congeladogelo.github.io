export function getDate() {
  return new Date();
}

export function formatDateToPtBR(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return new Date(date).toLocaleDateString('pt-BR', options).replace(' às ', ', ');
}
