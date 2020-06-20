import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WifiIconSvg from '../../assets/Notification/wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WifiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WifiIcon.Style = SvgIcon;
WifiIcon.displayName = 'WifiIcon';

export default WifiIcon
