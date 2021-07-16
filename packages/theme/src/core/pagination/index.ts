import colors from '../colors';
import { PaginationTheme } from './types';

const { grey, black, white, blue } = colors;

const pagination: PaginationTheme = {
    pageNumber: {
        color: {
            default: grey[800],
            hovered: grey[900],
            pressed: black,
            active: blue[500]
        },
        bgColor: {
            default: white,
            hovered: grey[50],
            pressed: grey[100],
            active: blue[100]
        },
        borderRadius: '50%',
    },
    pageNav: {
        color: {
            default: grey[800],
            hovered: grey[900],
            pressed: black,
            disabled: grey[300]
        },
        bgColor: {
            default: white,
            hovered: grey[50],
            pressed: grey[100],
            disabled: white
        }
    },
    overlayPageNumber: {
        color: {
            default: grey[100],
            hovered: grey[800],
            pressed: black
        },
        bgColor: {
            default: white,
            hovered: grey[50],
            pressed: grey[100]
        }
    }
};

export default pagination;
