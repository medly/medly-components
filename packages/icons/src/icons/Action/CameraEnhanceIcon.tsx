import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraEnhanceIconSvg from '../../assets/Action/camera_enhance_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraEnhanceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CameraEnhanceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CameraEnhanceIcon.Style = SvgIcon;
CameraEnhanceIcon.displayName = 'CameraEnhanceIcon';

export default CameraEnhanceIcon
