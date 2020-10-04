import { styled } from '@medly-components/utils';
import * as DatePickerStyled from '../../Calendar/Calendar.styled';
import { getPosition } from '../../Popover/Popup/styled/Popup.styled';
import { Placement } from '../../Popover/types';

export const DateRangeCalendar = styled(DatePickerStyled.Calendar)<{ size: 'S' | 'M'; placement: Placement }>`
    display: flex;
    flex-direction: row;
    z-index: 10;
    position: absolute;
    padding: 0;
    ${getPosition};
    top: ${({ size, placement }) =>
        (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') && (size === 'S' ? '4rem' : '5.6rem')};
`;
