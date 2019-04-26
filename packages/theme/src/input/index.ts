import colors from '../colors';
import { InputTheme } from './types';

const input: InputTheme = {
    color: colors.grey[600],
    bgColor: colors.white,
    borderColor: colors.grey[200],

    focus: {
        borderColor: colors.grey[600]
    },

    placeHolderColor: colors.grey[100]
};

export default input;
