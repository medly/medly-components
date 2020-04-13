import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatReclineExtraIconSvg from '../../assets/Notification/airline_seat_recline_extra_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatReclineExtraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirlineSeatReclineExtraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirlineSeatReclineExtraIcon.Style = SvgIcon;
AirlineSeatReclineExtraIcon.displayName = 'AirlineSeatReclineExtraIcon';

export default AirlineSeatReclineExtraIcon
