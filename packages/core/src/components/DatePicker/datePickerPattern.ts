/* eslint-disable no-useless-escape */
import { DisplayFormat } from './types';
const datePickerPattern: { [k in DisplayFormat]: string } = {
    'dd/MM/yyyy': `\\d{2} \\/ \\d{2} \\/ \\d{4}`,
    'MM/dd/yyyy': `\\d{2} \\/ \\d{2} \\/ \\d{4}`,
    'dd/yyyy/MM': `\\d{2} \\/ \\d{4} \\/ \\d{2}`,
    'MM/yyyy/dd': `\\d{2} \\/ \\d{4} \\/ \\d{2}`,
    'yyyy/dd/MM': `\\d{4} \\/ \\d{2} \\/ \\d{2}`,
    'yyyy/MM/dd': `\\d{4} \\/ \\d{2} \\/ \\d{2}`,
    'dd-MM-yyyy': `\\d{2} - \\d{2} - \\d{4}`,
    'dd-yyyy-MM': `\\d{2} - \\d{4} - \\d{2}`,
    'MM-dd-yyyy': `\\d{2} - \\d{2} - \\d{4}`,
    'MM-yyyy-dd': `\\d{2} - \\d{4} - \\d{2}`,
    'yyyy-dd-MM': `\\d{4} - \\d{2} - \\d{2}`,
    'yyyy-MM-dd': `\\d{4} - \\d{2} - \\d{4`
};

export default datePickerPattern;
