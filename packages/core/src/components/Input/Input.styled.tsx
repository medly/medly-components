import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props } from './types';

export const InputStyled = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    padding: 10px;
    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
    color: ${props => props.input.color};
    background-color: ${props => props.input.bgColor};
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 3px;

    &:focus {
        border-color: ${props => props.input.focus.borderColor};
        outline: 0;
    }

    &::placeholder {
        color: ${props => props.input.placeHolderColor};
    }
`;

InputStyled.defaultProps = {
    theme: defaultTheme
};
