import { defaultTheme } from '@medly-components/theme';
import { css, positionalSpacing, styled } from '@medly-components/utils';
import { Props } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

export const LabelStyled = styled('label')<Props>`
    margin: ${({ theme, labelPosition }) => positionalSpacing(labelPosition, theme.spacing.S)};
    color: ${({ theme }) => theme.label.color};
    ${({ required }) => required && asterisk()}
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
