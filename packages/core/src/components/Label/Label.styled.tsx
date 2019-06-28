import { defaultTheme } from '@medly-components/theme';
import { css, oppositePositionalspacing, styled } from '@medly-components/utils';
import { Props } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const pointerCursor = () => css`
    cursor: pointer;
`;

export const LabelStyled = styled('label')<Props>`
    margin: ${({ theme, labelPosition }) => oppositePositionalspacing(labelPosition, theme.spacing.S)};
    color: ${({ theme }) => theme.label.color};
    ${({ required }) => required && asterisk()}
    ${({ showPointer }) => showPointer && pointerCursor()}
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
