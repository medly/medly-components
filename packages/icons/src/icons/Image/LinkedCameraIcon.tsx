import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LinkedCameraIconSvg from '../../assets/Image/linked_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkedCameraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LinkedCameraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LinkedCameraIcon.Style = SvgIcon;
LinkedCameraIcon.displayName = 'LinkedCameraIcon';

export default LinkedCameraIcon
