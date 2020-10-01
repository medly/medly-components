import { parseToDate } from '@medly-components/utils/src';
import { DisplayFormat } from '../../DatePicker/types';

export const getValidDate = (date: Date | null | string, displayFormat: DisplayFormat): Date | null =>
    date instanceof Date ? date : typeof date === 'string' && date !== '' ? parseToDate(date, displayFormat) : null;
