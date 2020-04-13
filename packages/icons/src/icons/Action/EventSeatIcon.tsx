import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EventSeatIconSvg from '../../assets/Action/event_seat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventSeatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EventSeatIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EventSeatIcon.Style = SvgIcon;
EventSeatIcon.displayName = 'EventSeatIcon';

export default EventSeatIcon
