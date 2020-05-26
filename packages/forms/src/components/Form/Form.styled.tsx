import { styled } from '@medly-components/utils';

export const Form = styled('form')<{ fullWidth?: boolean; minWidth?: string }>`
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.6rem;
    display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};
    min-width: ${({ minWidth }) => minWidth || '50rem'};
`;

export const Actions = styled('div')`
    grid-column: 1/-1;
    margin-top: ${({ theme }) => theme.spacing.S4};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
