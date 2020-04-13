import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DevicesIconSvg from '../../assets/Device/devices_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DevicesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DevicesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DevicesIcon.Style = SvgIcon;
DevicesIcon.displayName = 'DevicesIcon';

export default DevicesIcon
