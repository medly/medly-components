import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoMeetingRoomIconSvg from '../../assets/Places/no_meeting_room_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoMeetingRoomIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NoMeetingRoomIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NoMeetingRoomIcon.Style = SvgIcon;
NoMeetingRoomIcon.displayName = 'NoMeetingRoomIcon';

export default NoMeetingRoomIcon
