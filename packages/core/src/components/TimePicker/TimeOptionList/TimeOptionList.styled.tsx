import { centerAligned } from '@medly-components/utils';
import styled from 'styled-components';

export const TimePicker = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
`;

export const TimeUList = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    scroll-snap-type: y mandatory;
    user-select: none;
    list-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TimeItem = styled('li')<{ isSelected?: boolean }>`
    ${centerAligned()}
    cursor: pointer;
    min-height: 4rem;
    scroll-snap-align: center;
    font-size: ${({ theme, isSelected }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].fontSize};
    font-weight: ${({ theme, isSelected }) =>
        theme.font.weights[theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].fontWeight]};
    line-height: ${({ theme, isSelected }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].lineHeight};
    letter-spacing: ${({ theme, isSelected }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].LetterSpacing};
    color: ${({ theme, isSelected }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].color};
    transition: all 200ms ease-in-ease-out;

    &:hover {
        text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
    }
`;
