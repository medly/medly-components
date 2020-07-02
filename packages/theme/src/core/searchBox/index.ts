import colors from '../colors';

const SearchBox = {
    sizes: {
        S: {
            height: '4rem',
            iconSize: '2rem'
        },
        M: {
            height: '4.8rem',
            iconSize: '2.4rem'
        }
    },
    default: {
        bgColor: colors.white,
        textColor: colors.black,
        placeholderTextColor: colors.grey[600],
        borderColor: colors.grey[500],
        iconBg: colors.grey[100],
        iconColor: colors.grey[600]
    },
    hover: {
        borderColor: colors.grey[600],
        boxShadow: '0px 2px 8px rgba(96, 120, 144, 0.25)'
    },
    active: {
        borderColor: colors.communityBlue[500],
        boxShadow: '0px 2px 16px rgba(96, 120, 144, 0.25)',
        placeholderTextColor: colors.grey[300],
        iconColor: colors.communityBlue[500],
        iconBg: colors.communityBlue[100]
    },
    options: {
        boxShadow: '0px 2px 16px rgba(96, 120, 144, 0.5)'
    }
};

export default SearchBox;
