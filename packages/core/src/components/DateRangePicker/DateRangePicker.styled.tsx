import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../Calendar/Calendar.styled';
import { getPosition } from '../Popover/Popup/styled/Popup.styled';
import { Placement } from '../Popover/types';
import * as TextFieldStyled from '../TextField/Styled';

export const InnerWrapper = styled(TextFieldStyled.InnerWrapper)`
    padding-left: 0.8rem;
    ${SvgIcon} {
        margin-right: 0.8rem;
    }
`;

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
