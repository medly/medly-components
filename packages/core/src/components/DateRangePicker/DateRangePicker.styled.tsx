import { styled } from '@medly-components/utils';
import { getPosition } from '../Popover/PopoverWrapper/PopoverWrapper.styled';
import { StyledProps } from './types';

export const DateRangePickerStyled = styled('div').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<StyledProps>`
    & > div:first-child {
        div {
            z-index: 5;
        }
        & > div:last-child {
            top: unset;
            bottom: unset;
            left: unset;
            right: unset;
            ${({ placement }) => getPosition(placement)}
        }
        & > div:first-child {
            width: 100%;
            display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};
            grid-template-columns: auto 30px auto;
            border: 1px solid ${props => props.input.borderColor};
            border-radius: 5px;
            padding: ${({ theme }) => theme.spacing.S};
            box-sizing: border-box;
            text-align: center;
            background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
            cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
            * {
                background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
                cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
            }

            label {
                text-align: center;
                border: 0;
                input {
                    text-align: center;
                    max-width: 90px;
                    min-height: unset;
                    padding: 0px;
                    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
                    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
                    color: ${props => props.input.color};
                    background-clip: padding-box;
                    box-sizing: border-box;

                    &:disabled {
                        cursor: not-allowed;
                    }

                    &:focus {
                        border-color: ${props => props.input.focusedBorderColor};
                        outline: 0;
                    }

                    &::placeholder {
                        color: ${props => props.input.placeHolderColor};
                    }

                    ::-webkit-file-upload-button {
                        visibility: hidden;
                    }
                }
            }
        }
    }
`;
