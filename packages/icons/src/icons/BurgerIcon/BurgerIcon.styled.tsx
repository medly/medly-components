import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { BurgerIconStyledProps, SpanProps } from './types';

const getSize = ({ theme, size }: BurgerIconStyledProps) => theme.icon.sizes[size];

export const SpanStyled = styled('span')<SpanProps>`
    display: block;
    position: absolute;
    width: calc(${getSize} * 1.33);
    height: calc(${getSize} * 0.2);
    background: ${({ theme, color }) => color || theme.icon.defaultColor};
    border-radius: calc(${getSize} * 0.2);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
        top: 0px;
    }

    &:nth-child(2) {
        top: calc(${getSize} * 0.4);
    }

    &:nth-child(3) {
        top: calc(${getSize} * 0.8);
    }
`;
SpanStyled.defaultProps = {
    theme: defaultTheme
};

const isOpen = () => css<BurgerIconStyledProps>`
    ${SpanStyled} {
        &:nth-child(1) {
            top: calc(${getSize} * 0.4);
            transform: rotate(135deg);
        }

        &:nth-child(2) {
            opacity: 0;
            left: -60px;
        }

        &:nth-child(3) {
            top: calc(${getSize} * 0.4);
            transform: rotate(-135deg);
        }
    }
`;

export const BurgerIconStyled = styled('button')<BurgerIconStyledProps>`
    border: none;
    background-color: transparent;
    outline: none;
    width: calc(${getSize} * 1.33);
    height: ${getSize};
    position: relative;
    margin: 10px;
    transform: rotate(0deg);
    transition: 0.2s ease-in-out;
    cursor: pointer;

    ${({ open }) => open && isOpen()}
`;

BurgerIconStyled.defaultProps = {
    theme: defaultTheme
};
