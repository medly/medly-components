import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirportShuttleIconSvg from '../../assets/Places/airport_shuttle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirportShuttleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirportShuttleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirportShuttleIcon.Style = SvgIcon;
AirportShuttleIcon.displayName = 'AirportShuttleIcon';

export default AirportShuttleIcon
