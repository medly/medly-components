import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsRailwayIconSvg from '../../assets/Maps/directions_railway_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsRailwayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsRailwayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsRailwayIcon.Style = SvgIcon;
DirectionsRailwayIcon.displayName = 'DirectionsRailwayIcon';

export default DirectionsRailwayIcon
