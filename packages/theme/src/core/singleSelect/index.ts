import colors from '../colors';
import { SingleSelectTheme } from './types';

const select: SingleSelectTheme = {
    bgColor: colors.white,
    disabledBgColor: colors.grey[200],
    outlineColor: colors.professionalNavy,
    borderColor: colors.grey[300],
    descriptionColor: colors.professionalNavy,
    placeHolderColor: colors.grey[500],
    selectedBgColor: colors.blue[400],
    selectedTextColor: colors.white,
    shadowColor: '#B0BCC8',
    option: {
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

export default select;
