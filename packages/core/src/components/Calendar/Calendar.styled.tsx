import { centerAligned, css, styled } from '@medly-components/utils';
import SingleSelect from '../SingleSelect';
import { Suffix } from '../TextField/Styled';
import { DateProps } from './types';

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MonthAndYearSelection = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0;
    align-items: center;
    justify-content: space-around;

    ${SingleSelect.Style} {
        min-width: unset;
        max-width: 10rem;
        input {
            max-width: 10rem;
            padding: 0.5rem;
            &:hover,
            &:focus {
                padding-bottom: 4px;
            }
            & ~ ${Suffix} {
                top: 1.85rem;
                right: 0.5rem;
            }
        }
    }
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template: repeat(7, auto) / repeat(7, auto);

    & > * {
        user-select: none;
        padding: 8px 10px;
    }
`;

const activeDate = () => css`
    background-color: ${({ theme }) => theme.datePicker.selectedDateBgColor};
    color: ${({ theme }) => theme.datePicker.selectedDateColor};
`;
const nonActiveMonthDate = () => css`
    color: ${({ theme }) => theme.datePicker.nonActiveMonthDateColor};
`;

export const Date = styled('button').attrs({ type: 'button' })<DateProps>`
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.datePicker.nonActiveMonthDateColor};
    }

    ${props => props.isSelected && activeDate()};
    ${props => !props.isInActiveMonth && nonActiveMonthDate()};

    ${centerAligned()}
`;
