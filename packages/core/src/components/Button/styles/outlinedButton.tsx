import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { Props } from '../types';

export const getPaddings = ({ size, variant, edges, isHovered }: Props & { isHovered?: boolean }) => {
    const paddings = {
        S: {
            top: '0.8rem',
            right: '2.4rem',
            bottom: '1rem',
            left: '2.4rem'
        },
        M: {
            top: '1rem',
            right: '2.4rem',
            bottom: '1.2rem',
            left: '2.4rem'
        }
    };
    if (variant === 'outlined') {
        Object.keys(paddings[size]).forEach((key: 'top' | 'right' | 'bottom' | 'left') => {
            paddings[size][key] = `calc(${paddings[size][key]} - ${isHovered ? '0.2rem' : '0.1rem'}) `;
        });
    }

    if (edges === 'circle') {
        return size === 'S' ? `1.4rem` : `1.6rem`;
    } else {
        return `${paddings[size].top} ${paddings[size].right} ${paddings[size].bottom} ${paddings[size].left}`;
    }
};

export const outlinedButton = ({ theme, color }: Props) => {
    const { colors } = theme.button;
    return css`
        &:disabled {
            border: 0.1rem solid;
            color: ${colors.outlined.disabledTextColor};
            border-color: ${colors.outlined.disabledBgColor};
            ${SvgIcon} {
                * {
                    fill: ${colors.outlined.disabledTextColor};
                }
            }
        }

        &:not(:disabled) {
            &:not(:hover) {
                border: 0.1rem solid;
                color: ${colors[color].bgColor};
                border-color: ${colors[color].bgColor};
                ${SvgIcon} {
                    * {
                        fill: ${colors[color].bgColor};
                    }
                }
            }
            &:hover {
                border: 0.2rem solid;
                color: ${colors[color].hoverBgColor};
                border-color: ${colors[color].hoverBgColor};
                padding: ${props => getPaddings({ ...props, isHovered: true })};
                box-shadow: ${colors[color].shadowColor};
                ${SvgIcon} {
                    * {
                        fill: ${colors[color].hoverBgColor};
                    }
                }
            }
        }
    `;
};
