import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrafficIconSvg from '../../assets/Maps/traffic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrafficIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrafficIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrafficIcon.Style = SvgIcon;
TrafficIcon.displayName = 'TrafficIcon';

export default TrafficIcon
