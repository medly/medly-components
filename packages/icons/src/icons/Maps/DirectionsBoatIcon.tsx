import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsBoatIconSvg from '../../assets/Maps/directions_boat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBoatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsBoatIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsBoatIcon.Style = SvgIcon;
DirectionsBoatIcon.displayName = 'DirectionsBoatIcon';

export default DirectionsBoatIcon
