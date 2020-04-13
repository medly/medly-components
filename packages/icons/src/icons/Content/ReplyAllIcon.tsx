import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReplyAllIconSvg from '../../assets/Content/reply_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReplyAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReplyAllIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReplyAllIcon.Style = SvgIcon;
ReplyAllIcon.displayName = 'ReplyAllIcon';

export default ReplyAllIcon
