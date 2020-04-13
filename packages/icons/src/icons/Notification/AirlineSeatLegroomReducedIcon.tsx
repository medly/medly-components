import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatLegroomReducedIconSvg from '../../assets/Notification/airline_seat_legroom_reduced_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatLegroomReducedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirlineSeatLegroomReducedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirlineSeatLegroomReducedIcon.Style = SvgIcon;
AirlineSeatLegroomReducedIcon.displayName = 'AirlineSeatLegroomReducedIcon';

export default AirlineSeatLegroomReducedIcon
