import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WifiLockIconSvg from '../../assets/Device/wifi_lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiLockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WifiLockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WifiLockIcon.Style = SvgIcon;
WifiLockIcon.displayName = 'WifiLockIcon';

export default WifiLockIcon
