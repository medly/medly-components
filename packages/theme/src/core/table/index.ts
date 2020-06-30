import colors from '../colors';
import { TableTheme } from './types';

const table: TableTheme = {
    rowDisabledColor: colors.grey[100],
    rowBackgroundColor: colors.white,
    headerColor: colors.white,
    borderColor: colors.grey[300],
    scrollBarColor: colors.grey[400],
    row: {
        bgColor: {
            odd: colors.white,
            even: colors.grey[50],
            disabled: colors.grey[100]
        },
        shadowColor: 'rgba(96, 120, 144, 0.35)'
    },
    header: {
        cell: {
            bgColor: {
                default: colors.white,
                hovered: colors.grey[100],
                selected: colors.communityBlue[100]
            }
        }
    }
};

export default table;
