import colors from '../colors';

const button = {
    colors: {
        solid: {
            textColor: colors.white,
            disabledBgColor: colors.grey[200],
            disabledTextColor: colors.grey[500]
        },
        outlined: {
            disabledBgColor: colors.grey[400],
            disabledTextColor: colors.grey[400]
        },
        flat: {
            disabledTextColor: colors.grey[400]
        },
        default: {
            bgColor: colors.communityBlue[500],
            hoverBgColor: colors.communityBlue[400],
            shadowColor: '0 0.4rem 0.8rem rgba(0, 90, 238, 0.35)'
        },
        confirmation: {
            bgColor: colors.green[500],
            hoverBgColor: colors.green[400],
            shadowColor: '0 0.4rem 0.8rem rgba(0,128,0, 0.35)'
        },
        error: {
            bgColor: colors.red[500],
            hoverBgColor: colors.red[400],
            shadowColor: '0 0.4rem 0.8rem rgba(204,0,0, 0.35)'
        }
    },
    borderRadius: {
        square: '0.8rem',
        rounded: '100rem',
        circle: '50%'
    }
};

export default button;
