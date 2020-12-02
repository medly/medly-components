import { format } from 'date-fns';
import { DisplayFormat } from '../../DatePicker/types';

export const getFormattedDate = (date: Date, displayFormat: DisplayFormat): string =>
    format(date, displayFormat).replace(new RegExp('\\/|\\-', 'g'), ' $& ');
