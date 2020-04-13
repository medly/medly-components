import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LaptopWindowsIconSvg from '../../assets/Hardware/laptop_windows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopWindowsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LaptopWindowsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LaptopWindowsIcon.Style = SvgIcon;
LaptopWindowsIcon.displayName = 'LaptopWindowsIcon';

export default LaptopWindowsIcon
