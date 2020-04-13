import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EventAvailableIconSvg from '../../assets/Notification/event_available_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventAvailableIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EventAvailableIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EventAvailableIcon.Style = SvgIcon;
EventAvailableIcon.displayName = 'EventAvailableIcon';

export default EventAvailableIcon
