import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallMissedIconSvg from '../../assets/Communication/call_missed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallMissedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallMissedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallMissedIcon.Style = SvgIcon;
CallMissedIcon.displayName = 'CallMissedIcon';

export default CallMissedIcon
