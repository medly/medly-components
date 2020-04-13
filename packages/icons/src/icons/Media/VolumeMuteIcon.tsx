import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VolumeMuteIconSvg from '../../assets/Media/volume_mute_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VolumeMuteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VolumeMuteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VolumeMuteIcon.Style = SvgIcon;
VolumeMuteIcon.displayName = 'VolumeMuteIcon';

export default VolumeMuteIcon
