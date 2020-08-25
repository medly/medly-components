import colors from '../colors';
import { MultiSelectTheme } from './types';

const grey = colors.grey;
const black = colors.black;
const white = colors.white;
const red = colors.red;
const blue = colors.blue;

const iconStyles = {
    default: {
        background: grey[300],
        hoverBackground: grey[400],
        color: grey[900],
        hoverColor: black
    },
    active: {
        background: blue[500],
        hoverBackground: blue[600],
        color: white,
        hoverColor: white
    },
    error: {
        background: red[500],
        hoverBackground: red[600],
        color: white,
        hoverColor: white
    },
    disabled: {
        background: grey[100],
        hoverBackground: grey[100],
        color: grey[400],
        hoverColor: grey[400]
    }
};

const chipStyles = {
    borderRadius: '2rem',
    default: {
        background: grey[100],
        border: grey[400],
        hoverBorder: grey[600],
        color: grey[900]
    },
    active: {
        background: blue[100],
        border: blue[500],
        hoverBorder: blue[600],
        color: grey[900]
    },
    error: {
        background: red[100],
        border: red[500],
        hoverBorder: red[600],
        color: grey[900]
    },
    disabled: {
        background: 'transparent',
        border: grey[300],
        hoverBorder: grey[300],
        color: grey[800]
    }
};

const multiSelectTheme: MultiSelectTheme = {
    outlined: {
        icon: iconStyles,
        chip: chipStyles
    },
    filled: {
        icon: {
            ...iconStyles,
            default: {
                ...iconStyles.default,
                background: grey[400],
                hoverBackground: grey[500]
            }
        },
        chip: {
            ...chipStyles,
            default: {
                background: grey[200],
                border: grey[600],
                hoverBorder: grey[800],
                color: grey[900]
            },
            active: {
                ...chipStyles.active,
                background: 'rgba(0, 90, 238, 0.2)'
            },
            error: {
                ...chipStyles.error,
                background: 'rgba(204, 0, 0, 0.2)'
            }
        }
    }
};

export default multiSelectTheme;
