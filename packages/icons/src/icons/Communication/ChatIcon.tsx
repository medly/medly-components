import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChatIconSvg from '../../assets/Communication/chat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChatIcon.Style = SvgIcon;
ChatIcon.displayName = 'ChatIcon';

export default ChatIcon
