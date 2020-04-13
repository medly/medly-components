import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EvStationIconSvg from '../../assets/Maps/ev_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EvStationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EvStationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EvStationIcon.Style = SvgIcon;
EvStationIcon.displayName = 'EvStationIcon';

export default EvStationIcon
