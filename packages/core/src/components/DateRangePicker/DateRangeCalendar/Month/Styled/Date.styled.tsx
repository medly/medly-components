import { css, styled } from '@medly-components/utils';
import Text from '../../../../Text';
import { ExtendedDateProps } from '../types';

const monthStartAndEndDateAfterStyle = css<ExtendedDateProps>`
        &::after {
            left: 0.4rem;
            width: 3.2rem;
            border-radius: ${({ isMonthFirstDate, isMonthLastDate }) => !isMonthFirstDate && !isMonthLastDate && '50%'};
        }
    `,
    monthStartAndEndDateBeforeStyle = css<ExtendedDateProps>`
        ${monthStartAndEndDateAfterStyle}
        &::after {
            border-top-right-radius: ${({ isMonthFirstDate }) => isMonthFirstDate && '50%'};
            border-bottom-right-radius: ${({ isMonthFirstDate }) => isMonthFirstDate && '50%'};
            border-top-left-radius: ${({ isMonthLastDate }) => isMonthLastDate && '50%'};
            border-bottom-left-radius: ${({ isMonthLastDate }) => isMonthLastDate && '50%'};
        }
        &::before {
            opacity: 1;
            width: 2.4rem;
            right: ${({ isMonthLastDate }) => (isMonthLastDate ? '-2rem' : 'unset')};
            left: ${({ isMonthFirstDate }) => (isMonthFirstDate ? '-2rem' : 'unset')};
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                ${({ theme, isInDateRange }) => (isInDateRange ? theme.colors.blue[100] : theme.colors.grey[100])} 100%
            );
            transform: ${({ isMonthLastDate }) => isMonthLastDate && 'rotate(-180deg)'};
        }
    `,
    dateAfterAndBeforeStyle= css<ExtendedDateProps>`
        &::after,
        &::before {
            position: absolute;
            content: '';
            z-index: -1;
            left: -0.4rem;
            top: 0.4rem;
            height: 3.2rem;
            width: 4.8rem;
            background-color: ${({ theme, isInDateRange, isInDateRangeHover }) =>
                (isInDateRangeHover && theme.colors.grey[100]) || (isInDateRange && theme.colors.blue[100])};
        }
        &::before {
            right: -1.8rem;
            width: 7.2rem;
            left: unset;
        }
    `;

export const DateContainer = styled.div<ExtendedDateProps>`
    text-align: center;
    margin-bottom: 0.4rem;
    padding: 0.4rem;
    position: relative;
    cursor: ${({ disabled, isInActiveMonth }) => (!isInActiveMonth ? 'default' : disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ isInActiveMonth }) => !isInActiveMonth && 0};
    pointer-events: ${({ isInActiveMonth }) => !isInActiveMonth && 'none'};

    ${dateAfterAndBeforeStyle};
    ${({ isMonthFirstDate, isMonthLastDate, isInDateRange, isInDateRangeHover }) =>
        (isMonthFirstDate || isMonthLastDate) && (isInDateRange || isInDateRangeHover) && monthStartAndEndDateBeforeStyle};
    &:nth-child(7n + 1),
    &:nth-child(7n) {
        ${monthStartAndEndDateAfterStyle}
        &::before {
            width: ${({ isMonthFirstDate, isMonthLastDate }) => !isMonthFirstDate && !isMonthLastDate && '3.4rem'};
        }
    }
    &:nth-child(7n)::before {
        right: ${({ isMonthFirstDate, isMonthLastDate }) => !isMonthFirstDate && !isMonthLastDate && '2.2rem'};
    }

    > button {
        background-color: ${({ theme, isSelected }) => (isSelected ? theme.datePicker.selectedDateBgColor : 'transparent')};
        border-color: ${({ theme, isCurrentDate, isSelected }) => !isSelected && isCurrentDate && theme.datePicker.currentDateBorderColor};
        > ${Text.Style} {
            padding: 0;
            margin: 0;
            font-weight: ${({ isSelected }) => isSelected && 'bold'};
            color: ${({ theme, isSelected }) => isSelected && theme.datePicker.selectedDateColor};
        }
    }
    &:hover {
        > button {
            border-color: ${({ theme, disabled, isInRangeAfterDateSelection }) =>
                !disabled && !isInRangeAfterDateSelection && theme.datePicker.selectedDateBgColor};
            background-color: ${({ isInRangeAfterDateSelection, theme }) => isInRangeAfterDateSelection && theme.colors.grey[200]};
        }
    }
`;

export const Date = styled('button').attrs({ type: 'button' })<ExtendedDateProps>`
    border: 0.2rem solid transparent;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &:focus {
        outline: none;
    }
    &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.datePicker.nonActiveMonthDateColor};
    }
`;
