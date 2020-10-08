import { css, styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../../Calendar/Calendar.styled';
import { ExtendedDateProps } from '../types';

const hideDateStyle = css`
        opacity: 0;
        cursor: default;
        pointer-events: none;
    `,
    dateBetweenRangeStyle = css`
        background-color: ${({ theme }) => theme.colors.blue[100]};
        border: none;
        position: relative;
        &::before {
            position: absolute;
            content: '';
            z-index: -1;
            left: -2.5rem;
            top: 0;
            width: 4.2rem;
            height: 100%;
            background-color: inherit;
        }
        &:nth-child(7n + 1)::before {
            display: none;
        }
        &:nth-child(7n) {
            /* background-color: green; */
        }
    `,
    dateBetweenRangeHoverStyle = css`
        ${dateBetweenRangeStyle};
        background-color: ${({ theme }) => theme.colors.grey[100]};
    `,
    commonDateBGFadeStyle = css`
        position: relative;
        border-radius: 0;
        &::after {
            position: absolute;
            content: '';
            z-index: 1;
            right: -2.4rem;
            top: 0;
            width: 2.4rem;
            height: 100%;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${({ theme }) => theme.colors.grey[100]} 100%);
            transform: rotate(-180deg);
        }
    `,
    hoverAndSelectStartDateStyle = css`
        ${commonDateBGFadeStyle};
        &::after {
            transform: rotate(0deg);
            left: -2.4rem;
            right: unset;
        }
        &::before {
            display: none;
        }
    `,
    selectStartDateStyle = css`
        &::after {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${({ theme }) => theme.colors.blue[100]} 100%);
        }
    `,
    isInDateRangeHoverBeforeStyle = css`
        ${dateBetweenRangeHoverStyle}
        background-color: ${({ theme }) => theme.colors.grey[200]};
        &::before {
            background-color: ${({ theme }) => theme.colors.grey[100]};
        }
    `,
    lastActiveDateStyle = css`
        ${dateBetweenRangeStyle}
        &::before {
            background-color: ${({ theme }) => theme.colors.blue[100]};
        }
    `;

export const Date = styled(CalendarStyled.Date)<ExtendedDateProps>`
    &:hover {
        ${({ isHoverBetweenDates, isMonthFirstDate, isSelectedEndDate }) =>
            isHoverBetweenDates && !isMonthFirstDate && !isSelectedEndDate && isInDateRangeHoverBeforeStyle};
        background-color: ${({ isInDateRange, theme }) => isInDateRange && theme.colors.blue[100]};
    }
    ${({ isInActiveMonth }) => !isInActiveMonth && hideDateStyle};

    ${({ isInDateRange }) => isInDateRange && dateBetweenRangeStyle};

    ${({ isInDateRangeHover }) => isInDateRangeHover && dateBetweenRangeHoverStyle};

    ${({ isMonthFirstDate, isInDateRangeHover, isInDateRange }) =>
        isMonthFirstDate && (isInDateRangeHover || isInDateRange) && hoverAndSelectStartDateStyle};

    ${({ isMonthLastDate, isInDateRangeHover, isInDateRange }) =>
        isMonthLastDate && (isInDateRangeHover || isInDateRange) && commonDateBGFadeStyle};

    ${({ isMonthFirstDate, isMonthLastDate, isInDateRange }) =>
        (isMonthFirstDate || isMonthLastDate) && isInDateRange && selectStartDateStyle};

    ${({ startDate, isSelectedEndDate }) => startDate && isSelectedEndDate && lastActiveDateStyle};
`;
