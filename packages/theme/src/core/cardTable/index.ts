import colors from '../colors';

const cardTable = {
    lightTheme: {
        headerTextColor: colors.grey[600],
        evenRowBgColor: colors.white,
        oddRowBgColor: colors.grey[50],
        borderColor: colors.grey[200],
        boxShadow: 'none',
        hoverBoxShadow: '0px 0.2rem 0.4rem rgba(176, 188, 200, 0.6)'
    },
    darkTheme: {
        headerTextColor: colors.grey[800],
        evenRowBgColor: colors.white,
        oddRowBgColor: colors.white,
        borderColor: colors.white,
        boxShadow: '0 0.2rem 0.8rem rgba(176,188,200,0.2)',
        hoverBoxShadow: '0 0.4rem 0.8rem rgba(176, 188, 200, 0.6)'
    }
};

export default cardTable;
