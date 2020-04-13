import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DesktopMacIconSvg from '../../assets/Hardware/desktop_mac_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DesktopMacIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DesktopMacIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DesktopMacIcon.Style = SvgIcon;
DesktopMacIcon.displayName = 'DesktopMacIcon';

export default DesktopMacIcon
