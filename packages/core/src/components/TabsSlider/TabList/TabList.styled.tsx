import { centerAligned, styled } from '@medly-components/utils';
import { StyledProps } from './types';

const transformSlider = (active: number) => `transform: translateX(${`calc(${active * 100}% + ${active * 0.4}rem`}));`;

export const TabList = styled.div`
    ${centerAligned('flex')}
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    overflow-x: auto;
    background-color: ${({ theme }) => theme.colors.grey[100]};
    padding: 0.4rem;
    box-sizing: border-box;
    border-radius: 1.2rem;
    position: relative;
`;

export const Slider = styled.div<StyledProps>`
    background-color: ${({ theme }) => theme.tabsSlider.bgColor.active};
    width: ${({ totalTabs }) => `calc(${100 / totalTabs}% - ${(totalTabs * 0.4) / (totalTabs - 1)}rem) `};
    height: calc(100% - 0.8rem);
    position: absolute;
    border-radius: 0.8rem;
    box-shadow: 0 0.1rem 0.4rem rgba(96, 120, 144, 0.1);
    transition: transform 0.3s ease-out;
    transform-box: content-box;
    ${({ active }) => transformSlider(active)}
`;

export const TabListWrapper = styled.div``;
