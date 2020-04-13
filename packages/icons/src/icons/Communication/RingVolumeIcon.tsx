import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RingVolumeIconSvg from '../../assets/Communication/ring_volume_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RingVolumeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RingVolumeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RingVolumeIcon.Style = SvgIcon;
RingVolumeIcon.displayName = 'RingVolumeIcon';

export default RingVolumeIcon
