import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UsbIconSvg from '../../assets/Device/usb_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UsbIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UsbIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UsbIcon.Style = SvgIcon;
UsbIcon.displayName = 'UsbIcon';

export default UsbIcon
