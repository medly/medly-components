import { SvgIcon } from '@medly-components/icons';
import styled from 'styled-components';
import Text from '../Text';
import { BoxProps } from './types';

const numberToRem = (val: number | undefined) => (val ? `calc(${val} * 0.25rem)` : 0);
const getShadow = (shadowSize: BoxProps['shadow']) => {
    switch (shadowSize) {
        case 'S':
            return '0px 1px 3px rgba(0, 0, 0, 0.2)';
        case 'M':
            return '0px 4px 6px rgba(0, 0, 0, 0.2)';
        case 'L':
            return '0 10px 15px rgba(0, 0, 0, 0.2)';
        case 'XL':
            return '0 10px 15px rgba(0, 0, 0, 0.4)';
        default:
            return 'none';
    }
};

export const BoxStyled = styled('div')<BoxProps>`
    width: ${({ width }) => width};
    color: ${({ color }) => color};
    height: ${({ height }) => height};
    background-color: ${({ bg }) => bg};
    display: ${({ display }) => display};
    border-radius: ${({ borderRadius }) => `${numberToRem(borderRadius)}`};
    padding: ${({ px, py }) => `${numberToRem(py)} ${numberToRem(px)}`};
    margin: ${({ mx, my }) => `${numberToRem(my)} ${numberToRem(mx)}`};
    border: ${({ borderColor, borderWidth }) => borderColor && borderWidth && `${numberToRem(borderWidth)} solid ${borderColor}`};
    box-shadow: ${({ shadow }) => getShadow(shadow)};

    &,
    ${Text.Style}, ${SvgIcon}, ${SvgIcon} * {
        transition: ${({ isLoading }) => (isLoading ? 'all 200ms ease-out' : 'all 100ms ease-out')};
    }

    & > *:not(:last-child) {
        opacity: ${({ isLoading }) => isLoading && 0};
    }

    &:hover {
        cursor: ${({ isLoading }) => !isLoading && 'pointer'};
    }

    &:focus {
        outline: none;
    }
`;
