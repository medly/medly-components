import { centerAligned, hideScrollbar } from '@medly-components/utils';
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
    width: 100%;
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
    ${hideScrollbar}
`;

const getFontStyle = (style: 'selectedOption' | 'nonSelectedOption') => css`
    font-size: ${({ theme }) => theme.timePicker[style].fontSize};
    font-weight: ${({ theme }) => theme.font.weights[theme.timePicker[style].fontWeight]};
    line-height: ${({ theme }) => theme.timePicker[style].lineHeight};
    letter-spacing: ${({ theme }) => theme.timePicker[style].LetterSpacing};
    color: ${({ theme }) => theme.timePicker[style].color};
    &:hover {
        color: ${({ theme }) => theme.timePicker[style].hoverColor};
    }
`;

export const TimeItem = styled('li')<{ isSelected?: boolean }>`
    ${centerAligned()}
    width: 100%;
    cursor: pointer;
    min-height: 4rem;
    scroll-snap-align: center;
    ${({ isSelected }) => getFontStyle(isSelected ? 'selectedOption' : 'nonSelectedOption')};

    &:hover {
        text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
    }
`;
