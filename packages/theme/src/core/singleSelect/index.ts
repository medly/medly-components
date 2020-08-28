import colors from '../colors';
import { SingleSelectTheme } from './types';

const singleSelect: SingleSelectTheme = {
    shadowColor: '#B0BCC8',
    option: {
        textVariant: {
            S: 'body2',
            M: 'body1'
        },
        bgColor: {
            default: colors.white,
            hovered: colors.grey[50],
            selected: colors.blue[100],
            error: colors.grey[100]
        },
        textColor: {
            default: colors.black,
            selected: colors.black,
            error: colors.red[500],
            disabled: colors.grey[500]
        }
    }
};

export default singleSelect;
