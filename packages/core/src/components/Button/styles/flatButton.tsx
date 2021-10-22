import { SvgIcon } from '@medly-components/icons';
import { WithThemeProp } from '@medly-components/utils';
import { css } from 'styled-components';
import { ButtonProps } from '../types';

const getStyle = (color: string) => css`
    color: ${color};
    &::after {
        background-color: ${color};
    }
    ${SvgIcon} {
        * {
            fill: ${color};
        }
    }
`;

export const flatButton = ({ theme, size }: ButtonProps & WithThemeProp) => {
    const { textColor } = theme.button.flat;
    return css`
        background-color: transparent;
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 0;
            bottom: ${size === 'M' ? `1.05rem` : `0.85rem`};
            left: 50%;
            height: 0.15rem;
            transition: all 100ms ease-out;
            border-radius: 0.15rem;
            transform: translate(-50%);
        }
        &:disabled {
            ${getStyle(textColor.disabled)}
        }

        &:not(:disabled) {
            &:not(:hover) {
                ${getStyle(textColor.default)}
            }
            &:active {
                ${getStyle(textColor.pressed)}
                &::after {
                    width: calc(100% - 4.8rem);
                }
            }
            &:not(:active):hover {
                ${getStyle(textColor.hovered)}
                &::after {
                    width: calc(100% - 4.8rem);
                }
            }
        }
    `;
};
