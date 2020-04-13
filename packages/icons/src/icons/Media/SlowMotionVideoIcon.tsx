import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SlowMotionVideoIconSvg from '../../assets/Media/slow_motion_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SlowMotionVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SlowMotionVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SlowMotionVideoIcon.Style = SvgIcon;
SlowMotionVideoIcon.displayName = 'SlowMotionVideoIcon';

export default SlowMotionVideoIcon
