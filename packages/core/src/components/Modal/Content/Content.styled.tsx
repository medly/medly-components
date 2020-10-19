import { styled } from '@medly-components/utils';

export const Content = styled('div')`
    flex: 1;
    overflow: hidden;
    padding: ${({ theme }) => `0 ${theme.spacing.S4}`};
`;
