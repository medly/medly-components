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
    },
    getPadding = ({ hideClearIcon, size }: Props) => css`
        padding: ${hideClearIcon
            ? size === 'S'
                ? '0.2rem 0.9rem'
                : '0.3rem 1.2rem'
            : size === 'S'
            ? '0.2rem 0.3rem 0.2rem 0.7rem'
            : '0.2rem 0.5rem 0.2rem 0.9rem'};
    `;

export const Chip = styled('button')<Props>`
    user-select: none;
    max-width: max-content;
    cursor: default;
    border: ${({ hideClearIcon }) => (hideClearIcon ? 0 : '1px solid')};
    pointer-events: ${({ hideClearIcon }) => hideClearIcon && 'none'};
    border-radius: ${({ theme, variant, hideClearIcon }) => (hideClearIcon ? '50%' : theme.multiSelect[variant].chip.borderRadius)};
    margin-right: ${({ size }) => (size === 'S' ? '0.6rem' : '0.8rem')};

    &:focus {
        outline: none;
    }
    &:disabled {
        &,
        & > ${SvgIcon} {
            cursor: not-allowed;
        }
    }

    ${SvgIcon} {
        font-size: 1.2rem;
        border-radius: 50%;
        cursor: pointer;
        padding: 0.4rem;
        margin-left: ${({ size }) => (size === 'S' ? '0.4rem' : '0.6rem')};
    }
    ${getStyle};
    ${getPadding}
    ${centerAligned()}
`;
