import { DateRangePickerTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Text from '../../../../Text';
import { ExtendedDateProps } from '../types';

type Props = ExtendedDateProps & { dateTheme: DateRangePickerTheme['date'] };

const monthStartAndEndDateAfterStyle = css<Props>`
        &::after {
            left: 0.4rem;
            width: ${({ isWeekFirstDate, isWeekLastDate, isMonthFirstDate, isMonthLastDate }) =>
                isWeekFirstDate && !isWeekLastDate && isMonthFirstDate && !isMonthLastDate ? '5.2rem' : '3.2rem'};
            border-top-right-radius: ${({ isWeekLastDate, isMonthLastDate, dateTheme }) =>
                !isMonthLastDate && isWeekLastDate ? dateTheme.borderRadius : 0};
            border-bottom-right-radius: ${({ isWeekLastDate, isMonthLastDate, dateTheme }) =>
                !isMonthLastDate && isWeekLastDate ? dateTheme.borderRadius : 0};
            border-top-left-radius: ${({ isWeekFirstDate, isMonthFirstDate, dateTheme }) =>
                !isMonthFirstDate && isWeekFirstDate ? dateTheme.borderRadius : 0};
            border-bottom-left-radius: ${({ isWeekFirstDate, isMonthFirstDate, dateTheme }) =>
                !isMonthFirstDate && isWeekFirstDate ? dateTheme.borderRadius : 0};
        }
    `,
    monthStartAndEndDateStyle = css<Props>`
        ${monthStartAndEndDateAfterStyle}
        &::before {
            opacity: 1;
            width: 2.4rem;
            right: ${({ isMonthLastDate }) => (isMonthLastDate ? '-2rem' : 'unset')};
            left: ${({ isMonthFirstDate }) => (isMonthFirstDate ? '-2rem' : 'unset')};
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                ${({ dateTheme, isInDateRange }) => (isInDateRange ? dateTheme.fillColor.selected : dateTheme.fillColor.hovered)} 100%
            );
            transform: ${({ isMonthLastDate }) => isMonthLastDate && 'rotate(-180deg)'};
        }
    `,
    weekStartAndEndDateStyle = css<Props>`
        ${monthStartAndEndDateAfterStyle};
        &::before {
            width: ${({ isMonthFirstDate, isMonthLastDate }) => !isMonthFirstDate && !isMonthLastDate && '3.4rem'};
            right: ${({ isMonthFirstDate, isMonthLastDate, isWeekLastDate }) =>
                !isMonthFirstDate && !isMonthLastDate && isWeekLastDate && '2.2rem'};
        }
    `;

export const DateContainer = styled.div.attrs(({ theme }) => ({ dateTheme: theme.dateRangePicker.date }))<Props>`
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
        background-color: ${({ dateTheme, isInDateRange, isInDateRangeHover }) =>
            (isInDateRangeHover && dateTheme.fillColor.hovered) || (isInDateRange && dateTheme.fillColor.selected)};
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
        border-color: ${({ dateTheme, isCurrentDate, isSelected, isInDateRange, isInDateRangeHover }) =>
            !isSelected && !(isInDateRange || isInDateRangeHover) && isCurrentDate && dateTheme.borderColor.currentDate};
    }
    &:hover {
        > button:not(:disabled) {
            border-color: ${({ dateTheme, isHoverDateAfterDateSelection }) =>
                !isHoverDateAfterDateSelection && dateTheme.borderColor.hovered};
            background-color: ${({ isHoverDateAfterDateSelection, dateTheme }) =>
                isHoverDateAfterDateSelection && dateTheme.bgColor.hovered};
        }
    }
`;

export const Date = styled('button').attrs(({ theme }) => ({ type: 'button', dateTheme: theme.dateRangePicker.date }))<Props>`
    transition: all 100ms ease-out;
    border: 0.2rem solid ${({ dateTheme }) => dateTheme.borderColor.default};
    height: 3.2rem;
    width: 3.2rem;
    background-color: ${({ isSelected, dateTheme }) => dateTheme.bgColor[isSelected ? 'selected' : 'default']};
    border-radius: ${({ dateTheme }) => dateTheme.borderRadius};
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
        color: ${({ dateTheme }) => dateTheme.color.disabled};
        background-color: ${({ dateTheme }) => dateTheme.bgColor.disabled};
        border-color: ${({ dateTheme }) => dateTheme.borderColor.disabled};
    }
    > ${Text.Style} {
        color: ${({ isSelected, dateTheme }) => isSelected && dateTheme.color.selected};
    }
`;
