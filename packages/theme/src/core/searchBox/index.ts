import colors from '../colors';
import { SearchBoxTheme } from './types';

const SearchBox: SearchBoxTheme = {
    height: {
        S: '4rem',
        M: '4.8rem'
    },
    textVariant: {
        S: 'body2',
        M: 'body1'
    },
    padding: {
        S: '0 0 0 1.2rem',
        M: '0 0 0 1.6rem'
    },
    textColor: colors.black,
    borderRadius: {
        S: {
            default: '.8rem',
            active: '.8rem'
        },
        M: {
            default: '.8rem',
            active: '.8rem'
        }
    },
    bgColor: {
        default: colors.white,
        hovered: colors.white,
        active: colors.white
    },
    borderColor: {
        default: colors.grey[500],
        hovered: colors.grey[600],
        active: colors.blue[500]
    },
    placeholderTextColor: {
        default: colors.grey[600],
        active: colors.grey[300]
    },
    closeIcon: {
        padding: {
            S: '0.4rem',
            M: '0.4rem'
        },
        borderRadius: '2.5rem',
        color: {
            default: colors.grey[700],
            hovered: colors.grey[800],
            pressed: colors.grey[900]
        },
        bgColor: {
            hovered: colors.grey[100],
            pressed: colors.grey[200]
        }
    },
    searchIcon: {
        padding: {
            S: '0.4rem',
            M: '0.4rem'
        },
        borderRadius: '2.5rem',
        color: {
            default: colors.grey[700],
            active: colors.blue[500],
            hovered: colors.blue[600],
            pressed: colors.blue[700]
        },
        bgColor: {
            hovered: colors.blue[100],
            pressed: colors.blue[200]
        }
    },
    expandIcon: {
        padding: {
            S: '0.4rem',
            M: '0.4rem'
        },
        borderRadius: '2.5rem',
        color: {
            default: colors.grey[600],
            hovered: colors.grey[900],
            pressed: colors.black,
            active: colors.grey[700]
        },
        bgColor: {
            hovered: colors.grey[100],
            active: colors.grey[200],
            pressed: colors.grey[200]
        }
    },
    boxShadow: {
        active: '0 0.2rem 0.8rem rgba(18, 106, 250, 0.2)',
        hovered: '0 0.2rem 0.8rem rgba(96, 120, 144, 0.2)'
    },
    options: {
        boxShadow: '0 0.2rem 0.8rem rgba(96, 120, 144, 0.35)'
    }
};

export default SearchBox;
