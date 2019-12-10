import colors from '../colors';
import { InputTheme } from './types';

const input: InputTheme = {
    color: colors.grey[700],
    bgColor: colors.white,
    borderColor: colors.grey[300],
    desciptionColor: colors.violet[400],
    disabledBgcolor: colors.grey[400],

    focus: {
        borderColor: colors.violet[500]
    },

    placeHolderColor: colors.grey[500]
};

export default input;
