import colors from '../colors';
import { InputTheme } from './types';

const input: InputTheme = {
    color: colors.grey[500],
    bgColor: colors.white,
    borderColor: colors.grey[200],

    focus: {
        borderColor: colors.blue[300]
    },

    placeHolderColor: colors.grey[300]
};

export default input;
