import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WatchIconSvg from '../../assets/Hardware/watch_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WatchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WatchIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WatchIcon.Style = SvgIcon;
WatchIcon.displayName = 'WatchIcon';

export default WatchIcon
