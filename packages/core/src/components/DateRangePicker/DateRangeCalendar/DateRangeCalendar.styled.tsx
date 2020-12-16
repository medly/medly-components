import { css, styled } from '@medly-components/utils';
import * as DatePickerStyled from '../../Calendar/Calendar.styled';
import { getPosition } from '../../Popover/Popup/styled/Popup.styled';
import { Placement } from '../../Popover/types';
import { CalendarAnimationTypes } from './types';

export const navigators = css`
        ${DatePickerStyled.MonthNavigation} {
            z-index: 1;
            top: 2rem;
            position: absolute;
            &:first-child {
                left: 2rem;
            }
            &:last-child {
                right: 2rem;
            }
        }
    `,
    monthSeparator = css`
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            height: 100%;
            border-left: 1px solid ${({ theme }) => theme.dateRangePicker.inputSeparatorColor.filled.default};
        }
    `;

export const DateRangeCalendar = styled(DatePickerStyled.Calendar)<{ size: 'S' | 'M'; placement: Placement; withSingleMonth?: boolean }>`
    z-index: 10;
    position: absolute;
    overflow: hidden;
    padding: 0;
    ${getPosition};
    top: ${({ size, placement }) =>
        (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') && (size === 'S' ? '4rem' : '5.6rem')};

    ${({ withSingleMonth }) =>
        !withSingleMonth &&
        css`
            ${navigators}
            ${monthSeparator}
        `}
`;
export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const MonthsWrapper = styled.div<{ slideDirection: CalendarAnimationTypes }>`
    display: flex;
    flex-direction: row;
    @keyframes move-out-left {
        100% {
            opacity: 0;
            transform: translateX(-5%);
        }
    }

    @keyframes move-out-right {
        100% {
            opacity: 0;
            transform: translateX(5%);
        }
    }

    @keyframes move-in-left {
        0% {
            transform: translateX(5%);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes move-in-right {
        0% {
            opacity: 0;
            transform: translateX(-5%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    animation: ${({ slideDirection }) => slideDirection && `${slideDirection} 200ms ease-in-out `};
`;
