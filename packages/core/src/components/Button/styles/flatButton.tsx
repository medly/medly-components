import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { Props } from '../types';

export const flatButton = ({ theme, color, size }: Props) => {
    const { colors } = theme.button;
    return css`
        background: transparent;

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 0;
            bottom: ${size === 'M' ? `1.05rem` : `0.85rem`};
            left: 50%;
            background: ${colors[color].bgColor};
            height: 0.15rem;
            transition: all 100ms ease-out;
            border-radius: 0.15rem;
            transform: translate(-50%);
        }

        &:disabled {
            color: ${colors.flat.disabledTextColor};
            ${SvgIcon} {
                * {
                    fill: ${colors.flat.disabledTextColor};
                }
            }
        }

        &:not(:disabled) {
            &:not(:hover) {
                color: ${colors[color].bgColor};
                ${SvgIcon} {
                    * {
                        fill: ${colors[color].bgColor};
                    }
                }
            }
            &:hover {
                color: ${colors[color].hoverBgColor};
                ${SvgIcon} {
                    * {
                        fill: ${colors[color].hoverBgColor};
                    }
                }

                &::after {
                    width: calc(100% - 4.8rem);
                }
            }
        }
    `;
};
