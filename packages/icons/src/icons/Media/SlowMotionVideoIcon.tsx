import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SlowMotionVideoIconSvg from '../../assets/Media/slow_motion_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SlowMotionVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SlowMotionVideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SlowMotionVideoIcon.Style = SvgIcon;
SlowMotionVideoIcon.displayName = 'SlowMotionVideoIcon';

export default SlowMotionVideoIcon
