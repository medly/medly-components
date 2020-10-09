import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import TextField from '../TextField';
import { DateProps } from './types';

export const Calendar = styled('div')`
    padding: 1.6rem;
    background: ${({ theme }) => theme.calendar.bgColor};
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.calendar.shadowColor};
    border-radius: ${({ theme }) => theme.calendar.borderRadius};
    width: max-content;
    height: max-content;
`;
export const MonthNavigation = styled.button<{ disabled?: boolean }>`
    border: none;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.8rem;
    outline: none;
    cursor: pointer;
    color: ${({ theme, disabled }) => theme.colors.grey[disabled ? '400' : '800']};
    transition: all 100ms ease-out;
    svg {
        fill: ${({ theme, disabled }) => theme.colors.grey[disabled ? '400' : '800']};
    }

    ${centerAligned()}

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.grey[50]};
    }
    &:not(:disabled):active {
        background-color: ${({ theme }) => theme.colors.grey[100]};
    }
`;
export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MonthAndYearSelection = styled.div`
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: space-around;

    ul {
        max-height: 20rem;
        overflow: auto;
    }

    ${TextField.Style} {
        min-width: unset;
        max-width: 9.5rem;
        & > div {
            height: 3.5rem;
            padding: 0 0 0 1rem;
        }
    }
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 4rem);
    grid-auto-rows: auto;

    button > ${Text.Style} {
        user-select: none;
        text-align: center;
        padding: 0.8rem 1rem;
        margin-bottom: 0.8rem;
    }
`;

const activeDate = () => css`
    span {
        font-weight: bold;
    }
    &,
    &:hover {
        background-color: ${({ theme }) => theme.datePicker.selectedDateBgColor};
        color: ${({ theme }) => theme.datePicker.selectedDateColor};
    }
`;
const currentDate = () => css`
    border-color: ${({ theme }) => theme.datePicker.currentDateBorderColor};
`;
const nonActiveMonthDate = () => css`
    color: ${({ theme }) => theme.datePicker.nonActiveMonthDateColor};
`;

export const Date = styled('button').attrs({ type: 'button' })<DateProps>`
    background-color: transparent;
    border: 0.2rem solid transparent;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: ${({ theme }) => theme.datePicker.borderRadius};
    padding: 0;
    margin: 0.4rem;
    box-sizing: border-box;
    height: 3.2rem;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.datePicker.nonActiveMonthDateColor};
    }

    &:hover {
        background-color: ${({ theme }) => theme.datePicker.hoveredDateColor};
    }

    ${({ isSelected }) => isSelected && activeDate()};
    ${({ isCurrentDate }) => isCurrentDate && currentDate()};
    ${({ isInActiveMonth }) => !isInActiveMonth && nonActiveMonthDate()};

    ${centerAligned()}
`;
