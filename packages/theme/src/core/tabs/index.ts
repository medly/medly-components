import colors from '../colors';
import { TabsTheme } from './types';

const tabs: TabsTheme = {
    labelColor: {
        active: colors.communityBlue[500],
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
        active: colors.communityBlue[500],
        closed: colors.grey[300],
        open: colors.grey[400],
        hovered: colors.grey[800]
    },
    iconColor: {
        active: colors.communityBlue[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    iconBgColor: {
        active: colors.communityBlue[500],
        default: colors.grey[100],
        hovered: colors.grey[200],
        disabled: colors.grey[50]
    },
    countColor: colors.white,
    countBgColor: {
        active: colors.communityBlue[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    bgColor: {
        active: colors.communityBlue[100],
        default: colors.white,
        disabled: colors.white,
        hovered: colors.grey[50]
    }
};

export default tabs;
