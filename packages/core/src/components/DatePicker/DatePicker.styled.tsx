import { styled } from '@medly-components/utils';
import { StyledProps } from './types';

export const DatePickerStyled = styled('div').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<StyledProps>`
    label {
        border: 0;
        background-color: unset;

        input {
            cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
            max-width: 90px;
            min-height: unset;
            padding: ${({ theme }) => theme.spacing.S};
            font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
            font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
            color: ${props => props.input.color};
            background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
            background-clip: padding-box;
            box-sizing: border-box;
            border: 1px solid ${props => props.input.borderColor};
            border-radius: 5px;

            &:disabled {
                cursor: not-allowed;
            }

            &:focus {
                border-color: ${props => props.input.focus.borderColor};
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

    label + div {
        z-index: 5;
    }
`;
