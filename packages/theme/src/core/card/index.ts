import colors from '../colors';
import font from '../font';
import { CardTheme } from './types';

const card: CardTheme = {
    backgroundColor: colors.white,
    textColor: font.defaults.color,
    separatorColor: colors.grey[500],
    shadowColor: colors.grey[400]
};

export default card;
