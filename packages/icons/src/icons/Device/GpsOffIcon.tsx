import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GpsOffIconSvg from '../../assets/Device/gps_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GpsOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GpsOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GpsOffIcon.Style = SvgIcon;
GpsOffIcon.displayName = 'GpsOffIcon';

export default GpsOffIcon
