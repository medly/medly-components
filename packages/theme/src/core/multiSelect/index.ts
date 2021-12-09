import colors from '../colors';
import { MultiSelectTheme } from './types';

const { grey } = colors;
const { black } = colors;
const { white } = colors;
const { red } = colors;
const { blue } = colors;

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
    fusion: {
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
    },
    options: {
        textVariant: {
            S: 'body2',
            M: 'body1'
        },
        chip: {
            borderRadius: '1.2rem',
            color: { default: colors.grey[900], hovered: colors.grey[900], disabled: colors.grey[700] },
            bgColor: { default: colors.grey[100], hovered: colors.grey[100], disabled: colors.grey[100] },
            borderColor: { default: colors.grey[300], hovered: colors.grey[400], disabled: colors.grey[100] },
            icon: {
                color: { default: colors.grey[800], hovered: colors.black, disabled: colors.grey[300] },
                bgColor: { default: 'transparent', hovered: colors.grey[400], disabled: 'transparent' }
            }
        }
    }
};

export default multiSelectTheme;
