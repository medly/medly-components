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
        selectedBorderColor: colors.blue[500],
        textColor: {
            odd: colors.black,
            even: colors.black,
            selected: colors.black,
            disabled: colors.black
        }
    },
    titleRow: {
        bgColor: {
            default: colors.grey[200],
            expanded: colors.blue[100],
            selected: colors.blue[200]
        },
        countChip: {
            textColor: colors.white,
            bgColor: {
                default: colors.grey[800],
                selected: colors.blue[500]
            }
        },
        secondaryContent: {
            textColor: colors.grey[800]
        },
        accordionIcon: {
            color: { default: colors.black, expanded: colors.blue[500], selected: colors.blue[500] },
            bgColor: {
                hover: { default: 'rgba(96, 120, 144, 0.15)', expanded: 'rgba(18, 106, 250, 0.1)', selected: 'rgba(18, 106, 250, 0.15)' },
                pressed: { default: 'rgba(96, 120, 144, 0.3)', expanded: 'rgba(18, 106, 250, 0.2)', selected: 'rgba(18, 106, 250, 0.3)' }
            }
        }
    },
    accordionIcon: {
        color: colors.black,
        bgColor: {
            hover: { default: 'rgba(96, 120, 144, 0.1)', selected: 'rgba(18, 106, 250, 0.15)' },
            pressed: { default: 'rgba(96, 120, 144, 0.2)', selected: 'rgba(18, 106, 250, 0.3)' }
        }
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
