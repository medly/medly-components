import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Brightness6IconSvg from '../../assets/Image/brightness_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness6Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness6IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness6Icon.Style = SvgIcon;
Brightness6Icon.displayName = 'Brightness6Icon';

export default Brightness6Icon
