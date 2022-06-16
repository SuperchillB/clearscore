/**
 * Strips time and formats yyyy-mm-dd date to European date format (dd/mm/yy)
 * @param   {String} date   Given date with yyyy-mm-dd format
 * @returns {String}        Formatted date with dd/mm/yy format
 */
export const formatStringDateToEuroDate = (date: string | null) => {
  if (!date) return '';
  const parts = date.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};
