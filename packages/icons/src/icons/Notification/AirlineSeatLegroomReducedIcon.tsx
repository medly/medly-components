import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatLegroomReducedIconSvg from '../../assets/Notification/airline_seat_legroom_reduced_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatLegroomReducedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatLegroomReducedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirlineSeatLegroomReducedIcon.Style = SvgIcon;
AirlineSeatLegroomReducedIcon.displayName = 'AirlineSeatLegroomReducedIcon';

export default AirlineSeatLegroomReducedIcon
