import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VolumeOffIconSvg from '../../assets/Media/volume_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VolumeOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VolumeOffIcon.Style = SvgIcon;
VolumeOffIcon.displayName = 'VolumeOffIcon';

export default VolumeOffIcon
