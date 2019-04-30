import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props, StyledProps } from './types';

const uppercase = () => css`
    text-transform: uppercase;
`;

const lineThrough = () => css`
    text-decoration: line-through;
`;

const getMappedProps = ({ theme: { text, font }, ...props }: Props) => {
    const { defaults } = text;
    const { textSize, textWeight, textColor } = props;
    return {
        textSize: font.sizes[textSize || defaults.textSize],
        textWeight: font.weights[textWeight || defaults.textWeight],
        textColor: textColor || 'inherit'
    };
};

export const TextStyled = styled('span').attrs(getMappedProps)<StyledProps>`
    font-size: ${({ textSize }) => textSize};
    font-weight: ${({ textWeight }) => textWeight};
    color: ${({ textColor }) => textColor};

    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
`;

TextStyled.defaultProps = {
    theme: defaultTheme
};
