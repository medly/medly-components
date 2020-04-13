import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SatelliteIconSvg from '../../assets/Maps/satellite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SatelliteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SatelliteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SatelliteIcon.Style = SvgIcon;
SatelliteIcon.displayName = 'SatelliteIcon';

export default SatelliteIcon
