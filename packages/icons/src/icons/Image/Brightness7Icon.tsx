import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness7IconSvg from '../../assets/Image/brightness_7_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness7Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness7IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness7Icon.Style = SvgIcon;
Brightness7Icon.displayName = 'Brightness7Icon';

export default Brightness7Icon
