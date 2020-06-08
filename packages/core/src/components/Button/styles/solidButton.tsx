import { SvgIcon } from '@medly-components/icons';
import { css } from '@medly-components/utils';
import { Props } from '../types';

export const solidButton = ({ theme, color, withGradient }: Props) => {
    const { colors } = theme.button;
    return css`
        &:disabled {
            color: ${colors.solid.disabledTextColor};
            background: ${colors.solid.disabledBgColor};
            ${SvgIcon} {
                * {
                    fill: ${colors.solid.disabledBgColor};
                }
            }
        }

        &:not(:disabled) {
            color: ${colors.solid.textColor};
            ${SvgIcon} {
                * {
                    fill: ${colors.solid.textColor};
                }
            }
            &:not(:hover) {
                background: ${colors[withGradient ? 'gradient' : color].bgColor};
            }
            &:hover {
                background: ${colors[withGradient ? 'gradient' : color].hoverBgColor};
                box-shadow: ${colors[withGradient ? 'gradient' : color].shadowColor};
            }
        }
    `;
};
