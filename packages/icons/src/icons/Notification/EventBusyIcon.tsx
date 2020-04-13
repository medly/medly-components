import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EventBusyIconSvg from '../../assets/Notification/event_busy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventBusyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EventBusyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EventBusyIcon.Style = SvgIcon;
EventBusyIcon.displayName = 'EventBusyIcon';

export default EventBusyIcon
