import colors from '../colors';
import { TabsTheme } from './types';

const tabs: TabsTheme = {
    tablistBgColor: colors.white,
    textColor: {
        active: colors.communityBlue[500],
        nonActive: colors.grey[600],
        hovered: colors.grey[800]
    },
    backgroundColor: {
        active: colors.communityBlue[100],
        nonActive: colors.white,
        hovered: colors.grey[50]
    },
    backgroundTheme: 'WHITE',
    tabStyle: 'OPEN'
};

export default tabs;
