import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SatelliteIconSvg from '../../assets/Maps/satellite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SatelliteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SatelliteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SatelliteIcon.Style = SvgIcon;
SatelliteIcon.displayName = 'SatelliteIcon';

export default SatelliteIcon
