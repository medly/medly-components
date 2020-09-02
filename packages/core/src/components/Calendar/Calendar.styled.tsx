import { centerAligned, css, styled } from '@medly-components/utils';
import { ButtonStyled } from '../Button/Button.styled';
import TextField from '../TextField';
import { DateProps } from './types';

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
    margin: 5px 0;
    align-items: center;
    justify-content: space-around;

    ul {
        top: 3.5rem;
        max-height: 200px;
        overflow: scroll;
        li {
            padding: 0 1rem;
        }
    }

    ${TextField.Style} {
        min-width: unset;
        max-width: 10rem;
        & > div {
            height: 3.5rem;
            padding: 0 1rem;
        }
    }
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template: repeat(7, 4rem) / repeat(7, 4rem);

    span {
        text-align: center;
    }

    & > * {
        user-select: none;
        padding: 8px 10px;
    }
`;

const activeDate = () => css`
    background-color: ${({ theme }) => theme.datePicker.selectedDateBgColor};
    color: ${({ theme }) => theme.datePicker.selectedDateColor};
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
    border-style: solid;
    border-width: 2px;
    border-color: transparent;
    text-decoration: none;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.datePicker.borderRadius};
    padding: 0;
    margin: 4px;
    text-align: center;

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
