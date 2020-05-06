import { styled } from '@medly-components/utils';

export const ModalContentStyled = styled('div')`
    flex: 1;
    margin-bottom: ${({ theme }) => theme.spacing.S4};
    overflow: scroll;

    > * {
        margin-bottom: ${({ theme }) => theme.spacing.S4};
    }
`;
