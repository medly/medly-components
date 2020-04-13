import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EventIconSvg from '../../assets/Action/event_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EventIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EventIcon.Style = SvgIcon;
EventIcon.displayName = 'EventIcon';

export default EventIcon
