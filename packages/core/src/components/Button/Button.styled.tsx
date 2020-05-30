import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

const solid = ({ theme, color }: Props) => {
    const { colors } = theme.button;
    return css`
        color: ${colors.solid.textColor};
        background: ${colors[color].bgColor};
        ${SvgIcon} {
            * {
                fill: ${colors.solid.textColor};
            }
        }

        &:hover {
            background: ${colors[color].hoverBgColor};
            box-shadow: ${colors[color].shadowColor};
        }

        &:disabled {
            box-shadow: none;
            color: ${colors.solid.disabledTextColor};
            background: ${colors.solid.disabledBgColor};
        }
    `;
};

const outlined = ({ theme, color }: Props) => {
    const { colors } = theme.button;
    return css`
        border: 0.2rem solid;
        color: ${colors[color].bgColor};
        border-color: ${colors[color].bgColor};
        ${SvgIcon} {
            * {
                fill: ${colors[color].bgColor};
            }
        }

        &:hover {
            color: ${colors[color].hoverBgColor};
            border-color: ${colors[color].hoverBgColor};
            box-shadow: ${colors[color].shadowColor};
            ${SvgIcon} {
                * {
                    fill: ${colors[color].hoverBgColor};
                }
            }
        }

        &:disabled {
            box-shadow: none;
            color: ${colors.outlined.disabledTextColor};
            border-color: ${colors.outlined.disabledBgColor};
            ${SvgIcon} {
                * {
                    fill: ${colors.outlined.disabledTextColor};
                }
            }
        }
    `;
};

const flat = ({ theme, color }: Props) => {
    const { colors } = theme.button;
    return css`
        background: transparent;
        color: ${colors[color].bgColor};
        ${SvgIcon} {
            * {
                fill: ${colors[color].bgColor};
            }
        }

        &:hover {
            color: ${colors[color].hoverBgColor};
            ${SvgIcon} {
                * {
                    fill: ${colors[color].hoverBgColor};
                }
            }
        }

        &:disabled {
            color: ${colors.flat.disabledTextColor};
        }
    `;
};

const getPaddings = ({ size, variant, edges }: Props) => {
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
            paddings[size][key] = `calc(${paddings[size][key]} - 0.2rem) `;
        });
    }

    if (edges === 'circle') {
        return size === 'S' ? `1.4rem` : `1.6rem`;
    } else {
        return `${paddings[size].top} ${paddings[size].right} ${paddings[size].bottom} ${paddings[size].left}`;
    }
};

export const ButtonStyled = styled('button')<Props>`
    border: none;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    transition: all 100ms linear;
    padding: ${getPaddings};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: ${({ edges, theme }) => theme.button.borderRadius[edges]};
    

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${props => props.variant === 'flat' && flat(props)};
    ${props => props.variant === 'outlined' && outlined(props)};
    ${props => props.variant === 'solid' && solid(props)};


    ${SvgIcon} + ${Text.Style}{
        margin-left: ${({ theme }) => theme.spacing.S2}
    }

    ${Text.Style} + ${SvgIcon}{
        margin-left: ${({ theme }) => theme.spacing.S2}
    }

    ${centerAligned()}
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme
};
