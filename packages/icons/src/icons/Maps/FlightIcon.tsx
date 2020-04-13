import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlightIconSvg from '../../assets/Maps/flight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlightIcon.Style = SvgIcon;
FlightIcon.displayName = 'FlightIcon';

export default FlightIcon
