import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbSunnyIconSvg from '../../assets/Image/wb_sunny_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbSunnyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WbSunnyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WbSunnyIcon.Style = SvgIcon;
WbSunnyIcon.displayName = 'WbSunnyIcon';

export default WbSunnyIcon
