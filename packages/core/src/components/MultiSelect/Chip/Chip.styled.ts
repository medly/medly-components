import { SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { Props } from './types';

const common = ({
    theme: {
        font: {
            weights,
            variants: { body1 }
        }
    },
    disabled
}: Props) => {
    return css`
        border: 1px solid;
        padding: 0.2rem 0.6rem 0.2rem 1rem;
        ${SvgIcon} {
            font-size: 1.2rem;
            padding: 0.4rem;
            border-radius: 50%;
            font-weight: ${weights.Medium};
        }
        ${Text.Style} {
            font-weight: ${weights.Medium};
            font-size: ${body1.fontSize};
            line-height: ${body1.lineHeight};
        }
        ${Text.Style} + ${SvgIcon}{
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            margin-left: 0.6rem;
        }
    `;
};

const getStylesForChipAndIcon = ({ theme, variant, state }: Props) => {
    const { multiSelect } = theme;
    const {
        chip: { [state]: chipStyle },
        icon: { [state]: iconStyle }
    } = multiSelect[variant];
    return css`
        border-color: ${chipStyle.border};
        background-color: ${chipStyle.background};
        ${SvgIcon} {
            background-color: ${iconStyle.background};
            * {
                fill: ${iconStyle.color};
            }
            &:hover {
                background-color: ${iconStyle.hoverBackground};
                * {
                    fill: ${iconStyle.hoverColor};
                }
            }
        }
        &:hover {
            border-color: ${chipStyle.hoverBorder};
        }
        ${Text.Style} {
            color: ${chipStyle.color};
        }
    `;
};

export const Chip = styled('button')<Props>`
    background-color: transparent;
    border: none;
    border-radius: 2rem;
    user-select: none;
    max-width: max-content;
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'default')};

    &:focus {
        outline: none;
    }

    ${common};
    ${getStylesForChipAndIcon};
    ${centerAligned()}
`;
