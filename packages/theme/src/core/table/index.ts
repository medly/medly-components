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
            selected: colors.blue[200],
            disabled: colors.grey[100]
        },
        selectedBorderColor: colors.blue[500]
    },
    header: {
        bgColor: colors.white,
        cell: {
            bgColor: {
                default: colors.white,
                hovered: colors.grey[50],
                pressed: colors.grey[100],
                selected: {
                    default: colors.blue[100],
                    hovered: colors.blue[100],
                    pressed: colors.blue[200]
                }
            },
            textColor: {
                default: colors.grey[800],
                hovered: colors.grey[900],
                pressed: colors.black,
                selected: {
                    default: colors.blue[500],
                    hovered: colors.blue[600],
                    pressed: colors.blue[700]
                }
            }
        }
    }
};

export default table;
