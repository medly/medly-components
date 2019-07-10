import { defaultTheme } from '@medly-components/theme';
import { css, oppositePositionalspacing, styled } from '@medly-components/utils';
import { Props, StyledProps } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const pointerCursor = () => css`
    cursor: pointer;
`;

const getMappedProps = ({ theme: { label, font }, ...props }: Props) => {
    const { defaults } = label;
    const { textSize, textWeight, textColor } = props;
    return {
        textSize: font.sizes[textSize || defaults.textSize],
        textWeight: font.weights[textWeight || defaults.textWeight],
        textColor: textColor || defaults.textColor
    };
};

export const LabelStyled = styled('label').attrs(getMappedProps)<StyledProps>`
    font-size: ${({ textSize }) => textSize};
    font-weight: ${({ textWeight }) => textWeight};
    color: ${({ textColor }) => textColor};
    margin: ${({ theme, labelPosition }) => oppositePositionalspacing(labelPosition, theme.spacing.S)};
    ${({ required }) => required && asterisk()}
    ${({ showPointer }) => showPointer && pointerCursor()}
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
