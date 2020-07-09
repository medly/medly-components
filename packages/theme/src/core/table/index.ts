import colors from '../colors';
import { TableTheme } from './types';

const table: TableTheme = {
    borderColor: colors.grey[300],
    scrollBarColor: colors.grey[400],
    shadowColor: colors.grey[600],
    row: {
        bgColor: {
            odd: colors.grey[50],
            even: colors.white,
            selected: colors.communityBlue[200],
            disabled: colors.grey[100]
        },
        selectedBorderColor: colors.communityBlue[500]
    },
    header: {
        bgColor: colors.white,
        cell: {
            bgColor: {
                default: colors.white,
                hovered: colors.grey[50],
                pressed: colors.grey[100],
                selected: {
                    default: colors.communityBlue[100],
                    hovered: colors.communityBlue[100],
                    pressed: colors.communityBlue[200]
                }
            },
            textColor: {
                default: colors.grey[800],
                hovered: colors.grey[900],
                pressed: colors.black,
                selected: {
                    default: colors.communityBlue[500],
                    hovered: colors.communityBlue[500],
                    pressed: colors.communityBlue[500]
                }
            }
        }
    }
};

export default table;
