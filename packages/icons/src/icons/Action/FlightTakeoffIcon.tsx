import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlightTakeoffIconSvg from '../../assets/Action/flight_takeoff_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlightTakeoffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlightTakeoffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlightTakeoffIcon.Style = SvgIcon;
FlightTakeoffIcon.displayName = 'FlightTakeoffIcon';

export default FlightTakeoffIcon
