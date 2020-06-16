import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoMeetingRoomIconSvg from '../../assets/Places/no_meeting_room_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoMeetingRoomIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoMeetingRoomIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoMeetingRoomIcon.Style = SvgIcon;
NoMeetingRoomIcon.displayName = 'NoMeetingRoomIcon';

export default NoMeetingRoomIcon
