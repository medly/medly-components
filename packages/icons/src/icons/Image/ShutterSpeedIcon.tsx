import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShutterSpeedIconSvg from '../../assets/Image/shutter_speed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShutterSpeedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ShutterSpeedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ShutterSpeedIcon.Style = SvgIcon;
ShutterSpeedIcon.displayName = 'ShutterSpeedIcon';

export default ShutterSpeedIcon
