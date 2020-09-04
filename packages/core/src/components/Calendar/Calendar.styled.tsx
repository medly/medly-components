import { centerAligned, css, styled } from '@medly-components/utils';
import { ButtonStyled } from '../Button/Button.styled';
import SingleSelect from '../SingleSelect';
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

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${ButtonStyled} {
        padding: 1rem;
    }
`;

export const MonthAndYearSelection = styled.div`
    width: 100%;
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: space-around;
    ${SingleSelect.Style} {
        margin: 0;
        ul {
            top: 3.5rem;
            max-height: 20rem;
            overflow: auto;
            li {
                padding: 0 1rem;
            }
        }
    }

    ${TextField.Style} {
        min-width: unset;
        max-width: 10.8rem;
        & > div {
            height: 3.5rem;
            padding: 0 1rem;
        }
    }
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template: repeat(7, 4rem) / repeat(7, 4rem);

    & > span {
        user-select: none;
        text-align: center;
        padding: 0.8rem 1rem;
    }
`;

const activeDate = () => css`
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
    border: 0.2rem solid;
    border-color: transparent;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: ${({ theme }) => theme.datePicker.borderRadius};
    padding: 0;
    margin: 0.4rem;

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
