import { defaultTheme } from '@medly-components/theme';
import { css, fullWidth, oppositePositionalspacing, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

export const InputStyled = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    padding: ${({ theme }) => theme.spacing.S};
    margin: ${({ theme, labelPosition }) => oppositePositionalspacing(labelPosition, theme.spacing.S)};
    font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
    font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
    color: ${props => props.input.color};
    background-color: ${props => props.input.bgColor};
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 5px;

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

    ${props => props.fullWidth && fullWidth()};

    ${({ description, theme }) =>
        description &&
        css`
            & ~ ${Text.Style} {
                color: ${theme.input.desciptionColor};
            }
        `}
`;

InputStyled.defaultProps = {
    theme: defaultTheme
};
