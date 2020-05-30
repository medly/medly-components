import { styled } from '@medly-components/utils';

export const Actions = styled('div')<{ alignItems?: 'left' | 'center' | 'right'; flexDirection: 'row' | 'column' }>`
    display: flex;
    grid-column: 1/-1;
    margin-top: ${({ theme }) => theme.spacing.S4};
    flex-direction: ${({ flexDirection }) => flexDirection};
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};

    & > * {
        margin-left: ${({ flexDirection }) => flexDirection === 'row' && `1.6rem`};
        margin-top: ${({ flexDirection }) => flexDirection === 'column' && `1.6rem`};
    }
`;
Actions.defaultProps = {
    flexDirection: 'row'
};
