import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirplanemodeActiveIconSvg from '../../assets/Device/airplanemode_active_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplanemodeActiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirplanemodeActiveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirplanemodeActiveIcon.Style = SvgIcon;
AirplanemodeActiveIcon.displayName = 'AirplanemodeActiveIcon';

export default AirplanemodeActiveIcon
