import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallMissedOutgoingIconSvg from '../../assets/Communication/call_missed_outgoing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallMissedOutgoingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallMissedOutgoingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallMissedOutgoingIcon.Style = SvgIcon;
CallMissedOutgoingIcon.displayName = 'CallMissedOutgoingIcon';

export default CallMissedOutgoingIcon
