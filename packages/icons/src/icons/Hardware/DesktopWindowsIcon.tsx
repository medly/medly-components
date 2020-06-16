import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DesktopWindowsIconSvg from '../../assets/Hardware/desktop_windows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DesktopWindowsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DesktopWindowsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DesktopWindowsIcon.Style = SvgIcon;
DesktopWindowsIcon.displayName = 'DesktopWindowsIcon';

export default DesktopWindowsIcon
