import { defaultTheme } from '@medly-components/theme';
import { fullWidth, styled } from '@medly-components/utils';
import { StyledInputProps, StyledLabelProps } from './types';

export const Input = styled('input').attrs({ type: 'file' })<StyledInputProps>`
    width: 1px;
    opacity: 0;
`;

export const Label = styled('label').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<StyledLabelProps>`
    padding: ${({ theme }) => theme.spacing.S};
    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
    color: ${props => props.input.color};
    background-clip: padding-box;
    background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;

    &:focus {
        border-color: ${props => props.input.focus.borderColor};
        outline: 0;
    }

    ${props => props.fullWidth && fullWidth()};
`;

Label.defaultProps = {
    theme: defaultTheme
};
