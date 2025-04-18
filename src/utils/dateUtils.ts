export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-');
};

export const formatDateWithDay = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

export const parseFormattedDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};