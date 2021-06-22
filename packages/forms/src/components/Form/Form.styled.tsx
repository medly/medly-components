import { styled } from '@medly-components/utils';

export const Form = styled('form')<{ fullWidth?: boolean; minWidth?: string }>`
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.6rem;
    min-width: ${({ minWidth }) => minWidth};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};

    & > h2 {
        grid-column: 1/-1;
        margin-bottom: 0.8rem;
    }

    & > span {
        grid-column: 1/-1;
        margin-bottom: 1rem;
    }
`;
