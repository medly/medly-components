import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RoomServiceIconSvg from '../../assets/Places/room_service_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RoomServiceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RoomServiceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RoomServiceIcon.Style = SvgIcon;
RoomServiceIcon.displayName = 'RoomServiceIcon';

export default RoomServiceIcon
