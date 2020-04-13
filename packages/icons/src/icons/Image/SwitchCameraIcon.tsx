import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwitchCameraIconSvg from '../../assets/Image/switch_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwitchCameraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SwitchCameraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SwitchCameraIcon.Style = SvgIcon;
SwitchCameraIcon.displayName = 'SwitchCameraIcon';

export default SwitchCameraIcon
