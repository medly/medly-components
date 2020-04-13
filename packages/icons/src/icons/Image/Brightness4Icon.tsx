import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness4IconSvg from '../../assets/Image/brightness_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness4Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness4IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness4Icon.Style = SvgIcon;
Brightness4Icon.displayName = 'Brightness4Icon';

export default Brightness4Icon
