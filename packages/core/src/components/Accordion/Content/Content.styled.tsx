import { styled } from '@medly-components/utils';

export const Wrapper = styled('div')`
    cursor: pointer;
    display: flex;
    outline: none;
    border-top: solid 0.2rem ${({ theme }) => theme.accordion.separatorColor};
    padding: 1.8rem;
    background-color: transparent;
`;
