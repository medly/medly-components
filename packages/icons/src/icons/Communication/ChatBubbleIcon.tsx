import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChatBubbleIconSvg from '../../assets/Communication/chat_bubble_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChatBubbleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChatBubbleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChatBubbleIcon.Style = SvgIcon;
ChatBubbleIcon.displayName = 'ChatBubbleIcon';

export default ChatBubbleIcon
