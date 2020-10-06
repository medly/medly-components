import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import Text from '../../../Text';

export const CalendarGrid = styled(CalendarStyled.CalendarGrid)`
    button.selectedStartDate,
    button.selectedEndDate {
        /* margin: 0.4rem 0; */

        /* height: 32px; */

        /* width: 32px; */

        /* position: relative;
        &::before {
            position: absolute;
            content: '';
            z-index: -1;
            right: -6px;
            top: -2px;
            width: 18px;
            height: 32px;
            background-color: ${({ theme }) => theme.colors.blue[100]};
        } */
    }
    button.selectedEndDate {
        /* &::before {
            right: unset;
            left: -6px;
        } */
    }

    button.hide {
        opacity: 0;
        cursor: default;
        pointer-events: none;
    }
    button.active,
    button.hoverActive {
        border-radius: 0;
        margin: 0.4rem 0;
        background-color: ${({ theme }) => theme.colors.blue[100]};
    }
    button.hoverActive {
        background-color: ${({ theme }) => theme.colors.grey[100]};
    }
    button.active.end,
    button.active.start,
    button.hoverActive.end,
    button.hoverActive.start {
        position: relative;
        &::after {
            position: absolute;
            content: '';
            z-index: 1;
            right: -26px;
            top: -2px;
            width: 24px;
            height: 32px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${({ theme }) => theme.colors.grey[100]} 100%);
            transform: rotate(-180deg);
        }
    }
    button.active.start,
    button.hoverActive.start {
        &::after {
            transform: rotate(0deg);
            left: -26px;
            right: unset;
        }
    }
    button.active.end,
    button.active.start {
        &::after {
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${({ theme }) => theme.colors.blue[100]} 100%);
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;
    padding-top: 2.3rem;
    ${CalendarStyled.CalendarGrid} {
        padding: 1.6rem 3.2rem;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
`;

export const MonthText = styled(Text)`
    display: block;
    width: 100%;
`;
