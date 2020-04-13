import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VolumeDownIconSvg from '../../assets/Media/volume_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VolumeDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VolumeDownIcon.Style = SvgIcon;
VolumeDownIcon.displayName = 'VolumeDownIcon';

export default VolumeDownIcon
