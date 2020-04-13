import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LaptopIconSvg from '../../assets/Hardware/laptop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LaptopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LaptopIcon.Style = SvgIcon;
LaptopIcon.displayName = 'LaptopIcon';

export default LaptopIcon
