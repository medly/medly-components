import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Wrapper = styled('button').attrs(({ theme: { accordion: { titleColor, backgroundColor } } }) => ({
    titleColor,
    backgroundColor
}))<Props>`
    cursor: pointer;
    padding: 1.8rem;
    display: flex;
    outline: none;
    border: none;
    background-color: ${({ bgColor, backgroundColor }) => bgColor || backgroundColor};
    color: ${({ color, titleColor }) => color || titleColor};
    border-radius: ${({ isActive }) => (isActive ? 'none' : '0.8rem')};
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;

    ${SvgIcon} {
        margin-left: auto;
        transition: transform 0.25s ease;
        transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
`;
