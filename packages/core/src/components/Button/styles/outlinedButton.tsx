import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { rgba } from 'polished';
import { ButtonProps } from '../types';

const getStyle = (textColor: string, bgColor = 'transparent', borderColor: string, borderWidth = '0.1rem') => css`
    color: ${textColor};
    background-color: ${bgColor};
    &::after {
        border-width: ${borderWidth};
        border-color: ${borderColor || textColor};
    }
    ${SvgIcon} {
        * {
            fill: ${textColor};
        }
    }
`;

const getHoverShadow = (shadowColor: string) => css`
    box-shadow: 0 0.2rem 0.8rem ${rgba(shadowColor, 0.35)};
`;

export const outlinedButton = ({ theme, isLoading, edges }: ButtonProps) => {
    const { textColor, bgColor, borderColor, hoverShadow } = theme.button.outlined;

    return css`
        background-color: transparent;
        &::after {
            content: '';
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: transparent;
            transition: all 100ms ease-out;
            border-radius: ${theme.button.borderRadius[edges]};
            border-style: solid;
        }
        &:disabled {
            ${getStyle(textColor.disabled, bgColor?.disabled, borderColor?.disabled)}
        }
        &:not(:disabled) {
            &:not(:hover) {
                ${getStyle(textColor.default, bgColor?.default, isLoading ? borderColor?.hovered : borderColor?.default)}
            }
            &:active {
                ${getStyle(textColor.pressed, bgColor?.pressed, borderColor?.pressed, '0.2rem')}
            }
            &:not(:active):hover {
                ${getStyle(textColor.hovered, bgColor?.hovered, borderColor?.hovered, '0.2rem')}
                ${hoverShadow && getHoverShadow(borderColor?.hovered || textColor.hovered)}
            }
        }
    `;
};
