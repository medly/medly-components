import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DesktopWindowsIconSvg from '../../assets/Hardware/desktop_windows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DesktopWindowsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'DesktopWindowsIcon';

const DesktopWindowsIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default DesktopWindowsIcon;
