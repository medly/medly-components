import { getFontStyle, InjectClassName, styled } from '@medly-components/utils';
import { getPosition } from '../Popover/Popup/styled/Popup.styled';
import { StyledProps } from './types';

export const Wrapper = styled(InjectClassName)`
    &,
    * {
        cursor: pointer;
    }
`;

export const DateRangePickerStyled = styled('div')<StyledProps>`
    display: flex;
    align-items: center;

    & > div {
        display: inline-block;
        position: unset;

        div {
            z-index: 5;
        }

        & > div:last-child {
            top: unset;
            bottom: unset;
            left: unset;
            right: unset;
            ${getPosition}
        }
        & > div:first-child {
            width: 100%;
            display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};
            grid-template-columns: auto 30px auto;
            padding: ${({ theme }) => theme.spacing.S2};
            box-sizing: border-box;
            text-align: center;
            cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

            div {
                ::before {
                    content: '';
                    width: 1px;
                    height: 100%;
                    background-color: ${({ theme }) => theme.colors.grey[300]};
                }
                svg {
                    display: none;
                }
            }

            label {
                text-align: center;
                border: 0;
                background: transparent;
                input {
                    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size as 'S' | 'M'] })}
                    max-width: 90px;
                    min-height: unset;
                    padding: 0;
                    box-sizing: border-box;
                    box-shadow: none;
                    background: transparent;
                    user-select: none;
                    background-clip: padding-box;

                    &:disabled {
                        cursor: not-allowed;
                    }

                    &:focus {
                        outline: 0;
                    }

                    ::-webkit-file-upload-button {
                        visibility: hidden;
                    }
                }
            }
        }
    }
`;
