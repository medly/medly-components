import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GpsNotFixedIconSvg from '../../assets/Device/gps_not_fixed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GpsNotFixedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GpsNotFixedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GpsNotFixedIcon.Style = SvgIcon;
GpsNotFixedIcon.displayName = 'GpsNotFixedIcon';

export default GpsNotFixedIcon
