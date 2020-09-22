import { centerAligned, styled } from '@medly-components/utils';

export const TabList = styled.div`
    ${centerAligned('inline-flex')}
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    background-color: ${({ theme }) => theme.colors.grey[100]};
    padding: 0.4rem 0.15rem;
    border-radius: 2rem;
`;

export const TabListWrapper = styled.div``;
