import { css } from '@medly-components/utils';
import { SearchBoxProps } from '../types';

export const getSearchBoxSize = ({ theme, size }: SearchBoxProps) => theme.searchBox.height[size];

export const getBorderAndBoxShadow = (color: string, boxShadow: string) => {
    return css`
        border-color: ${color};
        box-shadow: ${boxShadow};
    `;
};

export const getIconWrapperStyle = css`
    width: ${getSearchBoxSize};
    min-width: ${getSearchBoxSize};
    height: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
