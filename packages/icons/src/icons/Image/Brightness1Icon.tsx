import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Brightness1IconSvg from '../../assets/Image/brightness_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness1Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness1IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness1Icon.Style = SvgIcon;
Brightness1Icon.displayName = 'Brightness1Icon';

export default Brightness1Icon
