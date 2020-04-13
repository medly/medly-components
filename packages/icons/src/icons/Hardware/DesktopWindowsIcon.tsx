import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DesktopWindowsIconSvg from '../../assets/Hardware/desktop_windows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DesktopWindowsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DesktopWindowsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DesktopWindowsIcon.Style = SvgIcon;
DesktopWindowsIcon.displayName = 'DesktopWindowsIcon';

export default DesktopWindowsIcon
