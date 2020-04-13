import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeviceHubIconSvg from '../../assets/Hardware/device_hub_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeviceHubIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeviceHubIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeviceHubIcon.Style = SvgIcon;
DeviceHubIcon.displayName = 'DeviceHubIcon';

export default DeviceHubIcon
