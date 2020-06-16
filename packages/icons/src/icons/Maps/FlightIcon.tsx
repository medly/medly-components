import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlightIconSvg from '../../assets/Maps/flight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlightIcon.Style = SvgIcon;
FlightIcon.displayName = 'FlightIcon';

export default FlightIcon
