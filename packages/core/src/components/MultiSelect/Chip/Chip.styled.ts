import { SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { Props } from './types';

const defaultStyle = ({ theme, variant }: Props) => {
    const { multiSelect } = theme;
    const {
        chip: { default: defaultChipStyle },
        icon: { default: defaultIconStyle }
    } = multiSelect[variant];
    return css`
        border: 1px solid ${defaultChipStyle.border};
        background-color: ${defaultChipStyle.background};
        padding: 4px 6px 4px 10px;
        ${SvgIcon} {
            font-size: 1.2rem;
            background-color: ${defaultIconStyle.background};
            padding: 4px;
            border-radius: 50%;
            font-weight: 600;
            * {
                fill: ${defaultIconStyle.color};
            }
            &:hover {
                background-color: ${defaultIconStyle.hoverBackground};
                * {
                    fill: ${defaultIconStyle.hoverColor};
                }
            }
        }
        ${Text.Style} {
            font-weight: 600;
            color: ${defaultChipStyle.color};
        }
        &:hover {
            border-color: ${defaultChipStyle.hoverBorder};
        }
    `;
};

const errorStyle = ({ theme, variant }: Props) => {
    const { multiSelect } = theme;
    const {
        chip: { error: chipError },
        icon: { error: iconError }
    } = multiSelect[variant];
    return css`
        border-color: ${chipError.border};
        background-color: ${chipError.background};
        ${SvgIcon} {
            background-color: ${iconError.background};
            * {
                fill: ${iconError.color};
            }
            &:hover {
                background-color: ${iconError.hoverBackground};
            }
        }
        &:hover {
            border-color: ${chipError.hoverBorder};
        }
    `;
};

export const Chip = styled('button')<Props>`
    background-color: transparent;
    border: none;
    border-radius: 20px;
    margin: 2px;
    user-select: none;
    max-width: max-content;
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'default')};

    &:focus {
        outline: none;
    }

    ${defaultStyle};

    ${({ state }) => state === 'error' && errorStyle}

    ${Text.Style} + ${SvgIcon}{
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        margin-left: 5px;
    }

    ${centerAligned()}
`;
