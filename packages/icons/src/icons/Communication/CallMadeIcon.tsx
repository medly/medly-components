import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallMadeIconSvg from '../../assets/Communication/call_made_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallMadeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallMadeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallMadeIcon.Style = SvgIcon;
CallMadeIcon.displayName = 'CallMadeIcon';

export default CallMadeIcon
