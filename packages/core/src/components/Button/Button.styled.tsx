import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

const outlined = ({ theme, color }: Props) => {
    const { colors } = theme.button;
    return css`
        border: 0.1rem solid;
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
            background: ${colors[color].bgColor};
            box-shadow: ${colors[color].shadowColor};
        }

        &:disabled {
            box-shadow: none;
            color: ${colors.solid.textColor};
            background: ${colors.solid.disabledBgColor};
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

const padding = ({ size, variant, theme }: Props) => {
    const horizontal = variant === 'outlined' ? `calc(${theme.spacing.M1} - 0.1rem) ` : theme.spacing.M1;
    let vertical = size === 'S' ? theme.spacing.S2 : '1rem';
    vertical = variant === 'outlined' ? `calc(${vertical} - 0.1rem) ` : vertical;

    return `${vertical} ${horizontal}`;
};

export const ButtonStyled = styled('button')<Props>`
    border: none;
    user-select: none;
    text-decoration: none;
    transition: all 100ms linear;
    padding: ${padding};
    border-radius: ${({ edges, theme }) => theme.button.borderRadius[edges]};
    

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    ${props => props.variant === 'flat' && flat(props)};
    ${props => props.variant === 'outlined' && outlined(props)};
    ${props => props.variant === 'solid' && solid(props)};

    &:disabled {
        cursor: not-allowed;
    }

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
