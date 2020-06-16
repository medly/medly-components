import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RoomIconSvg from '../../assets/Action/room_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RoomIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RoomIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RoomIcon.Style = SvgIcon;
RoomIcon.displayName = 'RoomIcon';

export default RoomIcon
