import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlightLandIconSvg from '../../assets/Action/flight_land_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlightLandIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlightLandIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlightLandIcon.Style = SvgIcon;
FlightLandIcon.displayName = 'FlightLandIcon';

export default FlightLandIcon
