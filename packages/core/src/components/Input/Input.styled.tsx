import { defaultTheme } from '@medly-components/theme';
import { fullWidth, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

export const InputStyled = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    padding: ${({ theme }) => theme.spacing.S};
    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
    color: ${props => props.input.color};
    background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 5px;

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

    ${props => props.fullWidth && fullWidth()};
`;

InputStyled.defaultProps = {
    theme: defaultTheme
};
