import moment from 'moment';

export const formatDate = (value: string | Date): string => {
  return moment(value).format('DD/MM/YYYY').toString();
};
