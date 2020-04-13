import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatLegroomNormalIconSvg from '../../assets/Notification/airline_seat_legroom_normal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatLegroomNormalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatLegroomNormalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirlineSeatLegroomNormalIcon.Style = SvgIcon;
AirlineSeatLegroomNormalIcon.displayName = 'AirlineSeatLegroomNormalIcon';

export default AirlineSeatLegroomNormalIcon
