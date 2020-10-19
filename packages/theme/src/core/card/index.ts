import colors from '../colors';
import { CardTheme } from './types';

const card: CardTheme = {
    backgroundColor: colors.white,
    separatorColor: colors.grey[500],
    shadowColor: colors.grey[400],
    borderRadius: '0.8rem',
    padding: {
        S: '2.4rem',
        M: '2.4rem',
        L: '2.4rem',
        XL: '2.4rem'
    }
};

export default card;
