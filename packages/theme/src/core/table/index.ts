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
            odd: colors.grey[50],
            even: colors.white,
            selected: colors.communityBlue[200],
            disabled: colors.grey[100]
        },
        selectedBorderColor: colors.communityBlue[500],
        shadowColor: 'rgba(96, 120, 144, 0.35)'
    },
    header: {
        bgColor: colors.white,
        cell: {
            bgColor: {
                default: colors.white,
                hovered: colors.grey[50],
                pressed: colors.grey[100],
                selected: colors.communityBlue[100]
            },
            textColor: {
                default: colors.black,
                hovered: colors.black,
                pressed: colors.black,
                selected: colors.communityBlue[500]
            }
        }
    }
};

export default table;
