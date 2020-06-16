import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ImportantDevicesIconSvg from '../../assets/Action/important_devices_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImportantDevicesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ImportantDevicesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ImportantDevicesIcon.Style = SvgIcon;
ImportantDevicesIcon.displayName = 'ImportantDevicesIcon';

export default ImportantDevicesIcon
