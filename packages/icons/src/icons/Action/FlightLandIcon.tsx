import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlightLandIconSvg from '../../assets/Action/flight_land_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlightLandIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlightLandIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlightLandIcon.Style = SvgIcon;
FlightLandIcon.displayName = 'FlightLandIcon';

export default FlightLandIcon
