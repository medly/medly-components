import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallMergeIconSvg from '../../assets/Communication/call_merge_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallMergeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CallMergeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CallMergeIcon.Style = SvgIcon;
CallMergeIcon.displayName = 'CallMergeIcon';

export default CallMergeIcon
