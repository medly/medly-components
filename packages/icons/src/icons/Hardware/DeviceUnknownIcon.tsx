import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeviceUnknownIconSvg from '../../assets/Hardware/device_unknown_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeviceUnknownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeviceUnknownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeviceUnknownIcon.Style = SvgIcon;
DeviceUnknownIcon.displayName = 'DeviceUnknownIcon';

export default DeviceUnknownIcon
