import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Brightness3IconSvg from '../../assets/Image/brightness_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness3Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness3IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness3Icon.Style = SvgIcon;
Brightness3Icon.displayName = 'Brightness3Icon';

export default Brightness3Icon
