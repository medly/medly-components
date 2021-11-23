import { styled } from '@medly-components/utils';
import { BoxProps } from './types';

const numberToRem = (val: number) => `calc(${val} * 0.25rem)` || 0;

export const BoxStyled = styled('div')<BoxProps>`
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border-radius: ${props => `${numberToRem(props.borderRadius!)}`};
    padding: ${props => `${numberToRem(props.py!)} ${numberToRem(props.px!)}`};
    border: ${props => props.borderColor && props.borderWidth && `${numberToRem(props.borderWidth)} solid ${props.borderColor}`};
    margin: ${props => `${numberToRem(props.my!)} ${numberToRem(props.mx!)}`};
`;
