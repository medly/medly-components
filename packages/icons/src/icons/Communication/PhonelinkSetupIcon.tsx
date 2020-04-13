import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkSetupIconSvg from '../../assets/Communication/phonelink_setup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkSetupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhonelinkSetupIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhonelinkSetupIcon.Style = SvgIcon;
PhonelinkSetupIcon.displayName = 'PhonelinkSetupIcon';

export default PhonelinkSetupIcon
