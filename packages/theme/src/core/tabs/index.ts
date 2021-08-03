import colors from '../colors';
import { TabsTheme } from './types';

const tabs: TabsTheme = {
    labelColor: {
        active: colors.blue[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    helperTextColor: {
        active: colors.grey[600],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    borderColor: {
        active: colors.blue[500],
        outlined: colors.grey[300],
        flat: colors.grey[400],
        hovered: colors.grey[800]
    },
    iconColor: {
        active: colors.blue[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    iconBgColor: {
        active: colors.blue[500],
        default: colors.grey[100],
        hovered: colors.grey[200],
        disabled: colors.grey[50]
    },
    countColor: colors.white,
    countBorderRadius: '2.5rem',
    countBgColor: {
        active: colors.blue[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    bgColor: {
        active: colors.blue[100],
        default: colors.white,
        disabled: colors.white,
        hovered: colors.grey[50]
    },
    label: {
        fontVariant: {
            S: 'body2',
            M: 'body1',
            L: 'body1'
        }
    },
    solid: {
        tabBorderRadius: '.8rem',
        tabList: {
            color: colors.grey[200],
            borderRadius: '1.2rem',
            padding: {
                S: '.4rem',
                M: '.6rem',
                L: '.6rem'
            }
        },
        disabledLabel: {
            fontVariant: {
                S: 'body3',
                M: 'body2',
                L: 'body2'
            }
        }
    }
};

export default tabs;
