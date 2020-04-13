import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DialerSipIconSvg from '../../assets/Communication/dialer_sip_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DialerSipIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DialerSipIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DialerSipIcon.Style = SvgIcon;
DialerSipIcon.displayName = 'DialerSipIcon';

export default DialerSipIcon
