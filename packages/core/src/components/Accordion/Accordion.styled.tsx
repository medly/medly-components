import { SvgIcon } from '@medly-components/icons';
import styled from 'styled-components';
import { StyleProps } from './types';

export const Section = styled('div').attrs(({ theme: { accordion: { backgroundColor } } }: StyleProps) => ({
    backgroundColor
}))<StyleProps>`
    display: flex;
    flex-direction: column;
    background-color: ${({ bgColor, backgroundColor }) => bgColor || backgroundColor};
    border-radius: 0.8rem;
`;

export const Wrapper = styled('button')<StyleProps>`
    cursor: pointer;
    padding: 1.8rem;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    background-color: transparent;

    ${SvgIcon} {
        margin-left: auto;
        transition: transform 0.25s ease;
        transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
`;

export const Content = styled('div').attrs(({ theme: { accordion: { separatorColor } } }: StyleProps) => ({
    separatorColor
}))<StyleProps>`
    display: flex;
    transition: width 2s;
    transition-timing-function: linear;
    padding: 1.8rem;
    border-top: solid 0.2rem ${({ separatorColor }) => separatorColor};
`;
