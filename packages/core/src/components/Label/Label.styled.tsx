import { defaultTheme } from '@medly-components/theme';
import { css, oppositePositionalSpacing, styled } from '@medly-components/utils';
import { Props } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const getTextStyle = ({ theme, ...props }: Props) => {
    const { defaults } = theme.label,
        { weights, variants } = theme.font,
        { labelVariant, labelColor, labelWeight } = props,
        { fontSize, fontWeight, lineHeight, letterSpacing } = variants[labelVariant || defaults.variant];

    return css`
        color: ${labelColor || defaults.color};
        font-size: ${fontSize};
        font-weight: ${weights[labelWeight || fontWeight]};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
    `;
};

export const LabelStyled = styled('label')<Props>`
    ${getTextStyle}
    ${({ required }) => required && asterisk()}
    margin: ${({ theme, labelPosition }) => oppositePositionalSpacing(labelPosition, theme.spacing.S)};
    cursor: ${({ showPointer }) => (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed')};
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
