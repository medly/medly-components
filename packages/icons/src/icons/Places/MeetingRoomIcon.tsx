import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MeetingRoomIconSvg from '../../assets/Places/meeting_room_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MeetingRoomIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MeetingRoomIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MeetingRoomIcon.Style = SvgIcon;
MeetingRoomIcon.displayName = 'MeetingRoomIcon';

export default MeetingRoomIcon
