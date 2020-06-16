import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeviceHubIconSvg from '../../assets/Hardware/device_hub_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeviceHubIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeviceHubIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeviceHubIcon.Style = SvgIcon;
DeviceHubIcon.displayName = 'DeviceHubIcon';

export default DeviceHubIcon
