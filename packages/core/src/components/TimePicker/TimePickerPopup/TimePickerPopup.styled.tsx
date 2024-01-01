import styled from 'styled-components';
import Text from '../../Text';

export const TimePickerCard = styled('div')`
    padding: 1.2rem;
    background: ${({ theme }) => theme.timePicker.bgColor};
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.timePicker.shadowColor};
    border-radius: ${({ theme }) => theme.timePicker.borderRadius};
    width: max-content;
    height: max-content;
`;

export const TimeLabels = styled('div')`
    display: flex;
    flex-direction: row;

    & > * {
        flex: 1;
        user-select: none;
        text-align: center;
        font-size: ${({ theme }) => theme.timePicker.label.fontSize};
        font-weight: ${({ theme }) => theme.timePicker.label.fontWeight};
        line-height: ${({ theme }) => theme.timePicker.label.lineHeight};
        letter-spacing: ${({ theme }) => theme.timePicker.label.LetterSpacing};
        color: ${({ theme }) => theme.timePicker.label.color};
    }

    & > *:nth-child(2) {
        flex: 0.5;
    }
`;

export const TimePickerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1.8rem 0 2.4rem;
    position: relative;

    & > * {
        flex: 1;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: -1.2rem;
        width: calc(100% + 2.4rem);
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.grey[300]};
    }
    &::before {
        top: 3.2rem;
    }
    &::after {
        bottom: 3.2rem;
    }
`;

export const TimePicker = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
`;

export const TimeUList = styled.ul`
    padding: 0;
    margin: 0;
    height: ${({ theme }) => theme.timePicker.selectedOption.lineHeight};
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

    & > li {
        scroll-snap-align: center;
        font-size: ${({ theme }) => theme.timePicker.selectedOption.fontSize};
        font-weight: ${({ theme }) => theme.timePicker.selectedOption.fontWeight};
        line-height: ${({ theme }) => theme.timePicker.selectedOption.lineHeight};
        letter-spacing: ${({ theme }) => theme.timePicker.selectedOption.LetterSpacing};
        color: ${({ theme }) => theme.timePicker.selectedOption.color};
    }
`;

export const PeriodPicker = styled('div')`
    position: relative;
    max-height: 2.4rem;
`;

export const PeriodUList = styled('ul')`
    padding: 0;
    margin: 0;
    gap: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    list-style: none;
    transition: transform 200ms ease;
`;

export const PeriodListItem = styled('li')<{ isSelected: boolean }>`
    font-size: ${({ isSelected, theme }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].fontSize};
    font-weight: ${({ isSelected, theme }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].fontWeight};
    line-height: ${({ isSelected, theme }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].lineHeight};
    letter-spacing: ${({ isSelected, theme }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].LetterSpacing};
    color: ${({ isSelected, theme }) => theme.timePicker[isSelected ? 'selectedOption' : 'nonSelectedOption'].color};
    cursor: pointer;
    transition: all 200ms ease;
`;

export const Colon = styled(Text).attrs({ children: ':' })`
    flex: 0.5;
    display: flex;
    justify-content: flex-end;
    user-select: none;
`;

export const TimePickerActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
