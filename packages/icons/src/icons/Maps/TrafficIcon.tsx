import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrafficIconSvg from '../../assets/Maps/traffic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrafficIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TrafficIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TrafficIcon.Style = SvgIcon;
TrafficIcon.displayName = 'TrafficIcon';

export default TrafficIcon
