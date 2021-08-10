import colors from '../colors';
import { BreadcrumbTheme } from './types';

const breadcrumb: BreadcrumbTheme = {
    textColor: {
        default: colors.blue[500],
        hovered: colors.blue[600],
        disabled: colors.grey[400]
    }
};

export default breadcrumb;
