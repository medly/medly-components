import colors from '../colors';

const SearchBox = {
    sizes: {
        S: {
            height: '4rem',
            iconPosition: '0.7rem'
        },
        M: {
            height: '4.8rem',
            iconPosition: '1.1rem'
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
        boxShadow: '0 0.125rem 0.5rem rgba(colors.grey[600], 0.25)'
    },
    active: {
        borderColor: colors.communityBlue[500],
        boxShadow: '0 0.125rem 0.5rem rgba(colors.grey[600], 0.25)',
        placeholderTextColor: colors.grey[300],
        iconColor: colors.communityBlue[500],
        iconBg: colors.communityBlue[100]
    },
    options: {
        boxShadow: '0 0.2rem 1.6rem rgba(colors.grey[600], 0.5)'
    }
};

export default SearchBox;
