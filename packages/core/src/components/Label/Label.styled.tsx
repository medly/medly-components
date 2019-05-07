import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

export const LabelStyled = styled('label')<Props>`
    margin: 0px ${({ theme }) => theme.spacing.S} ${({ theme }) => theme.spacing.S} 0px;
    color: ${({ theme }) => theme.label.color};
    display: ${({ labelPosition }) => (labelPosition === 'horizontal' ? 'inline-block' : 'block')};

    ${({ required }) => required && asterisk()}
`;

LabelStyled.defaultProps = {
    theme: defaultTheme
};
