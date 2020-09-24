import colors from '../colors';
import { TabsSliderTheme } from './types';

const tabsSlider: TabsSliderTheme = {
    labelColor: {
        active: colors.blue[500],
        default: colors.grey[600],
        hovered: colors.grey[700],
        disabled: colors.grey[400]
    },
    bgColor: {
        active: colors.white,
        default: colors.grey[100],
        disabled: colors.grey[100],
        hovered: colors.grey[200]
    }
};

export default tabsSlider;
