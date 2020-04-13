import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThermostatIconSvg from '../../assets/Device/thermostat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThermostatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ThermostatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ThermostatIcon.Style = SvgIcon;
ThermostatIcon.displayName = 'ThermostatIcon';

export default ThermostatIcon
