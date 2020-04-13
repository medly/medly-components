import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MessageIconSvg from '../../assets/Communication/message_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MessageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MessageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MessageIcon.Style = SvgIcon;
MessageIcon.displayName = 'MessageIcon';

export default MessageIcon
