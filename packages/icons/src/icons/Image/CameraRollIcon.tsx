import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CameraRollIconSvg from '../../assets/Image/camera_roll_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraRollIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CameraRollIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CameraRollIcon.Style = SvgIcon;
CameraRollIcon.displayName = 'CameraRollIcon';

export default CameraRollIcon
