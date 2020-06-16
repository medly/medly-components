import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirportShuttleIconSvg from '../../assets/Places/airport_shuttle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirportShuttleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirportShuttleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirportShuttleIcon.Style = SvgIcon;
AirportShuttleIcon.displayName = 'AirportShuttleIcon';

export default AirportShuttleIcon
