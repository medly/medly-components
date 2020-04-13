import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraRearIconSvg from '../../assets/Image/camera_rear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraRearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CameraRearIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CameraRearIcon.Style = SvgIcon;
CameraRearIcon.displayName = 'CameraRearIcon';

export default CameraRearIcon
