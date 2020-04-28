import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import TextField from '../TextField';
import { Suffix } from '../TextField/Styled';
import { SelectWrapperProps } from './types';

export const Wrapper = styled('div')<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        margin: 0;
        input {
            cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
            & ~ ${Suffix} {
                cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
                * {
                    fill: ${({ theme, isErrorPresent, variant }) =>
                        theme.textField[variant][isErrorPresent ? 'error' : 'default'].labelColor};
                }
            }
            &:focus ~ ${Suffix} {
                * {
                    fill: ${({ theme, variant }) => theme.textField[variant].default.textColor};
                }
            }
        }
    }
`;

Wrapper.defaultProps = {
    theme: defaultTheme
};
