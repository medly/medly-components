import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraAltIconSvg from '../../assets/Image/camera_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CameraAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CameraAltIcon.Style = SvgIcon;
CameraAltIcon.displayName = 'CameraAltIcon';

export default CameraAltIcon
