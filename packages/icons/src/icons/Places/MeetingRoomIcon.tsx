import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MeetingRoomIconSvg from '../../assets/Places/meeting_room_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MeetingRoomIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MeetingRoomIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MeetingRoomIcon.Style = SvgIcon;
MeetingRoomIcon.displayName = 'MeetingRoomIcon';

export default MeetingRoomIcon
