import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraFrontIconSvg from '../../assets/Image/camera_front_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraFrontIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CameraFrontIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CameraFrontIcon.Style = SvgIcon;
CameraFrontIcon.displayName = 'CameraFrontIcon';

export default CameraFrontIcon
