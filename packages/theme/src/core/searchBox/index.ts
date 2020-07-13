import colors from '../colors';

const SearchBox = {
    sizes: {
        S: {
            height: '4rem',
            iconSize: '2rem',
            maxHeight: '20rem'
        },
        M: {
            height: '4.8rem',
            iconSize: '2.4rem',
            maxHeight: '21rem'
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
        boxShadow: '0 0.2rem 0.8rem rgba(96, 120, 144, 0.2)'
    },
    active: {
        borderColor: colors.communityBlue[500],
        boxShadow: '0 0.2rem 0.8rem rgba(18, 106, 250, 0.2)',
        placeholderTextColor: colors.grey[300],
        iconColor: colors.communityBlue[500],
        iconBg: colors.communityBlue[100]
    },
    options: {
        boxShadow: '0 0.6rem 0.8rem rgba(18, 106, 250, 0.2)'
    }
};

export default SearchBox;
