import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermScanWifiIconSvg from '../../assets/Action/perm_scan_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermScanWifiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermScanWifiIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermScanWifiIcon.Style = SvgIcon;
PermScanWifiIcon.displayName = 'PermScanWifiIcon';

export default PermScanWifiIcon
