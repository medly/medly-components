import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatFlatIconSvg from '../../assets/Notification/airline_seat_flat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatFlatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatFlatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirlineSeatFlatIcon.Style = SvgIcon;
AirlineSeatFlatIcon.displayName = 'AirlineSeatFlatIcon';

export default AirlineSeatFlatIcon
