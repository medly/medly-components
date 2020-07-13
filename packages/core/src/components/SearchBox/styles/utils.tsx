import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { Props } from '../types';

export const getSearchBoxSize = ({ theme, size }: Props) => theme.searchBox.sizes[size].height;

export const getBorderAndBoxShadow = (color: string, boxShadow: string) => {
    return css`
        border-color: ${color};
        box-shadow: ${boxShadow};
    `;
};

export const getIconWrapperStyle = ({ theme, size }: Props) => {
    return css`
        width: ${getSearchBoxSize};
        min-width: ${getSearchBoxSize};
        height: auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${SvgIcon} {
            cursor: pointer;
            font-size: ${theme.searchBox.sizes[size].iconSize};
        }
    `;
};
