import colors from '../colors';
import { MobileTabsTheme } from './types';

const mobileTabs: MobileTabsTheme = {
    labelColor: {
        active: colors.blue[500],
        default: colors.grey[600],
        hovered: colors.grey[700],
        disabled: colors.grey[400]
    },
    borderColor: {
        active: colors.blue[500],
        closed: colors.grey[300],
        open: colors.grey[400],
        hovered: colors.grey[800]
    },
    bgColor: {
        active: colors.white,
        default: colors.grey[100],
        disabled: colors.grey[100],
        hovered: colors.grey[200]
    }
};

export default mobileTabs;
