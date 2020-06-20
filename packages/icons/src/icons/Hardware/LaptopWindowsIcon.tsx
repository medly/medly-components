import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LaptopWindowsIconSvg from '../../assets/Hardware/laptop_windows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopWindowsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LaptopWindowsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LaptopWindowsIcon.Style = SvgIcon;
LaptopWindowsIcon.displayName = 'LaptopWindowsIcon';

export default LaptopWindowsIcon
