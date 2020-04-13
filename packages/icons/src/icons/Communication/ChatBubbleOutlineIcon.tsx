import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChatBubbleOutlineIconSvg from '../../assets/Communication/chat_bubble_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChatBubbleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChatBubbleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChatBubbleOutlineIcon.Style = SvgIcon;
ChatBubbleOutlineIcon.displayName = 'ChatBubbleOutlineIcon';

export default ChatBubbleOutlineIcon
