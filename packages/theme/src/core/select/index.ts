import colors from '../colors';
import { SelectTheme } from './types';

const select: SelectTheme = {
    bgColor: colors.white,
    disabledBgColor: colors.grey[200],
    outlineColor: colors.professionalNavy,
    borderColor: colors.grey[300],
    descriptionColor: colors.professionalNavy,
    placeHolderColor: colors.grey[500],
    selectedBgColor: colors.marigoldOrange[400],
    selectedTextColor: colors.white,
    options: {
        shadowColor: '#B0BCC8',
        bgColor: colors.white,
        textColor: colors.black,
        disableTextColor: colors.grey[500],
        hoverBgColor: colors.grey[100]
    }
};

export default select;
