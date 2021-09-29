import { styled } from '@medly-components/utils';

export const OuterWrapper = styled('div')<{ fullWidth?: boolean; minWidth?: string; maxWidth?: string }>`
    position: relative;
    flex-direction: column;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};
`;
OuterWrapper.defaultProps = {
    minWidth: '20rem'
};
