import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../Calendar/Calendar.styled';
import { getPosition } from '../../Popover/Popup/styled/Popup.styled';
import { Placement } from '../../Popover/types';
import Text from '../../Text';

export const DateRangePopup = styled(CalendarStyled.Calendar)<{ size: 'S' | 'M'; placement: Placement }>`
    display: flex;
    flex-direction: row;
    z-index: 10;
    position: absolute;
    padding: 0;
    ${getPosition};
    top: ${({ size, placement }) =>
        (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') && (size === 'S' ? '4rem' : '5.6rem')};
`;

export const CalendarWrapper = styled.div`
    position: relative;
    padding-top: 2.3rem;
    ${CalendarStyled.Calendar} {
        box-shadow: none;
        background-color: transparent;
        border-radius: 0;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
`;

export const NavigatorIcon = styled(CalendarStyled.MonthNavigation)<{ align: 'left' | 'right' }>`
    position: absolute;
    top: 1.6rem;
    left: ${({ align }) => align === 'left' && `1.6rem`};
    right: ${({ align }) => align === 'right' && `1.6rem`};
`;

export const MonthText = styled(Text)`
    display: block;
    width: 100%;
`;
