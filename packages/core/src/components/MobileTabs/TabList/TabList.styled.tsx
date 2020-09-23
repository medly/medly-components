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

export const Slider = styled.div`
    background-color: ${({ theme }) => theme.mobileTabs.bgColor.active};
    width: 16.5rem;
    height: 3.7rem;
    position: absolute;
    border-radius: 2rem;
    margin: 0 0.25rem;
    box-shadow: 0 0.1rem 0.4rem rgba(96, 120, 144, 0.1);
    transition: transform 0.3s ease-out;
    transform: translateX(50px);
`;

export const TabListWrapper = styled.div``;
