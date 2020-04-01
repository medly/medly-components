import { defaultTheme } from '@medly-components/theme';
import { css, oppositePositionalSpacing, styled } from '@medly-components/utils';
import { Props, StyledProps } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const getMappedProps = ({ theme: { label, font }, ...props }: Props) => {
    const { defaults } = label;
    const { labelSize, labelWeight, labelColor } = props;
    return {
        textSize: font.sizes[labelSize || defaults.textSize],
        textWeight: font.weights[labelWeight || defaults.textWeight],
        textColor: labelColor || defaults.textColor
    };
};

export const LabelStyled = styled('label').attrs(getMappedProps)<StyledProps>`
    font-size: ${({ textSize }) => textSize};
    font-weight: ${({ textWeight }) => textWeight};
    color: ${({ textColor }) => textColor};
    margin: ${({ theme, labelPosition }) => oppositePositionalSpacing(labelPosition, theme.spacing.S)};
    ${({ required }) => required && asterisk()}
    cursor: ${({ showPointer }) => (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed')};
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
