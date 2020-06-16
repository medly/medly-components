import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EvStationIconSvg from '../../assets/Maps/ev_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EvStationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EvStationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EvStationIcon.Style = SvgIcon;
EvStationIcon.displayName = 'EvStationIcon';

export default EvStationIcon
