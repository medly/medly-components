import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatFlatAngledIconSvg from '../../assets/Notification/airline_seat_flat_angled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatFlatAngledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirlineSeatFlatAngledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirlineSeatFlatAngledIcon.Style = SvgIcon;
AirlineSeatFlatAngledIcon.displayName = 'AirlineSeatFlatAngledIcon';

export default AirlineSeatFlatAngledIcon
