import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalGasStationIconSvg from '../../assets/Maps/local_gas_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalGasStationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalGasStationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalGasStationIcon.Style = SvgIcon;
LocalGasStationIcon.displayName = 'LocalGasStationIcon';

export default LocalGasStationIcon
