import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermScanWifiIconSvg from '../../assets/Action/perm_scan_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermScanWifiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermScanWifiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermScanWifiIcon.Style = SvgIcon;
PermScanWifiIcon.displayName = 'PermScanWifiIcon';

export default PermScanWifiIcon
