import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShutterSpeedIconSvg from '../../assets/Image/shutter_speed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShutterSpeedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShutterSpeedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShutterSpeedIcon.Style = SvgIcon;
ShutterSpeedIcon.displayName = 'ShutterSpeedIcon';

export default ShutterSpeedIcon
