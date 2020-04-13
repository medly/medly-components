import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LiveTvIconSvg from '../../assets/Notification/live_tv_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LiveTvIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LiveTvIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LiveTvIcon.Style = SvgIcon;
LiveTvIcon.displayName = 'LiveTvIcon';

export default LiveTvIcon
