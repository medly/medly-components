import { centerAligned, css, styled } from '@medly-components/utils';
import { StyledProps } from './types';

const solidStyle = () => css`
    justify-content: space-between;
    align-items: stretch;
    padding: 0.4rem;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.tabs.tabList.borderRadius};
    position: relative;
    color: red;
    background-color: ${({ theme }) => theme.tabs.tabList.color};
`;

export const TabList = styled.div<StyledProps>`
    ${centerAligned('flex')}
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    background-color: transparent;

    ${({ variant }) => variant === 'solid' && solidStyle}
`;

const transformSlider = (active: number) => `transform: translateX(${`calc(${active * 100}% + ${active * 0.4}rem`}));`;

export const Slider = styled.div<StyledProps>`
    background-color: ${({ theme }) => theme.tabs.slider.color};
    width: ${({ totalTabs }) => `calc(${100 / totalTabs}% - ${0.4 + 0.4 / totalTabs}rem ) `};
    height: calc(100% - 0.8rem);
    position: absolute;
    border-radius: ${({ theme }) => theme.tabs.slider.borderRadius};
    box-shadow: 0 0.1rem 0.4rem rgba(96, 120, 144, 0.1);
    transition: transform 0.3s ease-out;
    transform-box: content-box;
    box-sizing: border-box;
    ${({ active }) => transformSlider(active)}
`;
