import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeviceUnknownIconSvg from '../../assets/Hardware/device_unknown_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeviceUnknownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeviceUnknownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeviceUnknownIcon.Style = SvgIcon;
DeviceUnknownIcon.displayName = 'DeviceUnknownIcon';

export default DeviceUnknownIcon
