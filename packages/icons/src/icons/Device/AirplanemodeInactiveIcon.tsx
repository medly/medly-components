import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirplanemodeInactiveIconSvg from '../../assets/Device/airplanemode_inactive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplanemodeInactiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirplanemodeInactiveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirplanemodeInactiveIcon.Style = SvgIcon;
AirplanemodeInactiveIcon.displayName = 'AirplanemodeInactiveIcon';

export default AirplanemodeInactiveIcon
