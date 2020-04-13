import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallSplitIconSvg from '../../assets/Communication/call_split_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallSplitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallSplitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallSplitIcon.Style = SvgIcon;
CallSplitIcon.displayName = 'CallSplitIcon';

export default CallSplitIcon
