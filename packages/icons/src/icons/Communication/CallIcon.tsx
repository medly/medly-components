import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallIconSvg from '../../assets/Communication/call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallIcon.Style = SvgIcon;
CallIcon.displayName = 'CallIcon';

export default CallIcon
