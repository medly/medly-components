import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatReclineNormalIconSvg from '../../assets/Notification/airline_seat_recline_normal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatReclineNormalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirlineSeatReclineNormalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirlineSeatReclineNormalIcon.Style = SvgIcon;
AirlineSeatReclineNormalIcon.displayName = 'AirlineSeatReclineNormalIcon';

export default AirlineSeatReclineNormalIcon
