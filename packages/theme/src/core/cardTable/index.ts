import colors from '../colors';
import { CardTableTheme } from './types';

const cardTable: CardTableTheme = {
    lightBackground: {
        headerColor: colors.grey[600],
        headerActiveColor: colors.communityBlue[500],
        headerHoverColor: colors.communityBlue[400],
        evenRowBgColor: colors.white,
        oddRowBgColor: colors.grey[50],
        borderColor: colors.grey[200],
        boxShadow: 'none',
        hoverBoxShadow: '0px 0.2rem 0.4rem rgba(176, 188, 200, 0.6)'
    },
    darkBackground: {
        headerColor: colors.grey[800],
        headerActiveColor: colors.communityBlue[500],
        headerHoverColor: colors.communityBlue[400],
        evenRowBgColor: colors.white,
        oddRowBgColor: colors.white,
        borderColor: colors.white,
        boxShadow: '0 0.2rem 0.8rem rgba(176,188,200,0.2)',
        hoverBoxShadow: '0 0.4rem 0.8rem rgba(176, 188, 200, 0.6)'
    }
};

export default cardTable;
