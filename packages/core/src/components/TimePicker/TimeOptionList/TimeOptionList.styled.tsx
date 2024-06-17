import { centerAligned } from '@medly-components/utils';
import styled, { css } from 'styled-components';

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

const getFontStyle = (style: 'selectedOption' | 'nonSelectedOption') => css`
    font-size: ${({ theme }) => theme.timePicker[style].fontSize};
    font-weight: ${({ theme }) => theme.font.weights[theme.timePicker[style].fontWeight]};
    line-height: ${({ theme }) => theme.timePicker[style].lineHeight};
    letter-spacing: ${({ theme }) => theme.timePicker[style].LetterSpacing};
    color: ${({ theme }) => theme.timePicker[style].color};
`;

export const TimeItem = styled('li')<{ isSelected?: boolean }>`
    ${centerAligned()}
    cursor: pointer;
    min-height: 4rem;
    scroll-snap-align: center;
    transition: all 200ms ease-in-ease-out;
    ${({ isSelected }) => getFontStyle(isSelected ? 'selectedOption' : 'nonSelectedOption')};

    &:hover {
        text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
    }
`;
