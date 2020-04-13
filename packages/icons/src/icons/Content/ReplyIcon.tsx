import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReplyIconSvg from '../../assets/Content/reply_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReplyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReplyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReplyIcon.Style = SvgIcon;
ReplyIcon.displayName = 'ReplyIcon';

export default ReplyIcon
