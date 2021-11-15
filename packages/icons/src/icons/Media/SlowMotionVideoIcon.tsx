import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SlowMotionVideoIconSvg from '../../assets/Media/slow_motion_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SlowMotionVideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SlowMotionVideoIcon';

const SlowMotionVideoIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SlowMotionVideoIcon;
