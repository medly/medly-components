import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MediaTimerIconSvg from '../../assets/Media/media_timer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MediaTimerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MediaTimerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MediaTimerIcon.Style = SvgIcon;
MediaTimerIcon.displayName = 'MediaTimerIcon';

export default MediaTimerIcon
