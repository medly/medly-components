import { css, styled } from '@medly-components/utils';
import Text from '../../../../Text';
import { ExtendedDateProps } from '../types';

const monthStartAndEndDateAfterStyle = css<ExtendedDateProps>`
        &::after {
            left: 0.4rem;
            width: ${({ isWeekFirstDate, isWeekLastDate, isMonthFirstDate, isMonthLastDate }) =>
                isWeekFirstDate && !isWeekLastDate && isMonthFirstDate && !isMonthLastDate ? '5.2rem' : '3.2rem'};
            border-top-right-radius: ${({ isWeekLastDate, isMonthLastDate }) => (!isMonthLastDate && isWeekLastDate ? '50%' : 0)};
            border-bottom-right-radius: ${({ isWeekLastDate, isMonthLastDate }) => (!isMonthLastDate && isWeekLastDate ? '50%' : 0)};
            border-top-left-radius: ${({ isWeekFirstDate, isMonthFirstDate }) => (!isMonthFirstDate && isWeekFirstDate ? '50%' : 0)};
            border-bottom-left-radius: ${({ isWeekFirstDate, isMonthFirstDate }) => (!isMonthFirstDate && isWeekFirstDate ? '50%' : 0)};
        }
    `,
    monthStartAndEndDateStyle = css<ExtendedDateProps>`
        ${monthStartAndEndDateAfterStyle}
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
    weekStartAndEndDateStyle = css<ExtendedDateProps>`
        ${monthStartAndEndDateAfterStyle};
        &::before {
            width: ${({ isMonthFirstDate, isMonthLastDate }) => !isMonthFirstDate && !isMonthLastDate && '3.4rem'};
            right: ${({ isMonthFirstDate, isMonthLastDate, isWeekLastDate }) =>
                !isMonthFirstDate && !isMonthLastDate && isWeekLastDate && '2.2rem'};
        }
    `;

export const DateContainer = styled.div<ExtendedDateProps>`
    transition: all 100ms ease-out;
    text-align: center;
    padding: 0.4rem;
    position: relative;
    cursor: ${({ disabled, isInActiveMonth }) => (!isInActiveMonth ? 'default' : disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ isInActiveMonth }) => !isInActiveMonth && 0};
    pointer-events: ${({ isInActiveMonth }) => !isInActiveMonth && 'none'};

    &::after,
    &::before {
        position: absolute;
        content: '';
        z-index: -1;
        top: 0.4rem;
        height: 3.2rem;
        background-color: ${({ theme, isInDateRange, isInDateRangeHover }) =>
            (isInDateRangeHover && theme.colors.grey[100]) || (isInDateRange && theme.colors.blue[100])};
    }
    &::after {
        width: 4.8rem;
        left: -0.4rem;
    }
    &::before {
        right: -1.8rem;
        width: 7.2rem;
    }

    ${({ isMonthFirstDate, isMonthLastDate, isInDateRange, isInDateRangeHover }) =>
        (isMonthFirstDate || isMonthLastDate) && (isInDateRange || isInDateRangeHover) && monthStartAndEndDateStyle};

    ${({ isWeekFirstDate, isWeekLastDate }) => (isWeekFirstDate || isWeekLastDate) && weekStartAndEndDateStyle};

    > button {
        background-color: ${({ theme, isSelected }) => (isSelected ? theme.datePicker.selectedDateBgColor : 'transparent')};
        border-color: ${({ theme, isCurrentDate, isSelected, isInDateRange, isInDateRangeHover }) =>
            !isSelected && !(isInDateRange || isInDateRangeHover) && isCurrentDate && theme.datePicker.currentDateBorderColor};
        > ${Text.Style} {
            padding: 0;
            margin: 0;
            font-weight: ${({ isSelected }) => isSelected && 'bold'};
            color: ${({ theme, isSelected }) => isSelected && theme.datePicker.selectedDateColor};
        }
    }
    &:hover {
        > button:not(:disabled) {
            border-color: ${({ theme, isHoverDateAfterDateSelection }) =>
                !isHoverDateAfterDateSelection && theme.datePicker.selectedDateBgColor};
            background-color: ${({ isHoverDateAfterDateSelection, theme }) => isHoverDateAfterDateSelection && theme.colors.grey[200]};
        }
    }
`;

export const Date = styled('button').attrs({ type: 'button' })<ExtendedDateProps>`
    transition: all 100ms ease-out;
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
