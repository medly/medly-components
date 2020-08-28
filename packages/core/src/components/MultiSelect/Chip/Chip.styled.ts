import { SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import { Props } from './types';

const getStyle = ({ theme, variant, state }: Props) => {
    const { multiSelect } = theme;
    const {
        chip: { [state]: chipStyle },
        icon: { [state]: iconStyle }
    } = multiSelect[variant];
    return css`
        color: ${chipStyle.color};
        border-color: ${chipStyle.border};
        background-color: ${chipStyle.background};
        ${SvgIcon} {
            padding: 0.4rem;
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
    `;
};

export const Chip = styled('button')<Props>`
    user-select: none;
    border: 1px solid;
    max-width: max-content;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
    border-radius: ${({ theme, variant }) => theme.multiSelect[variant].chip.borderRadius};
    padding: ${({ size }) => (size === 'S' ? '0.2rem 0.3rem 0.2rem 0.7rem' : '0.2rem 0.5rem 0.2rem 0.9rem')};

    &:focus {
        outline: none;
    }

    ${SvgIcon} {
        font-size: 1.2rem;
        border-radius: 50%;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        margin-left: ${({ size }) => (size === 'S' ? '0.4rem' : '0.6rem')};
    }
    ${getStyle};
    ${centerAligned()}
`;
