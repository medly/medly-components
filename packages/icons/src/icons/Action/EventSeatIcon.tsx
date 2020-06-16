import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EventSeatIconSvg from '../../assets/Action/event_seat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventSeatIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EventSeatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EventSeatIcon.Style = SvgIcon;
EventSeatIcon.displayName = 'EventSeatIcon';

export default EventSeatIcon
