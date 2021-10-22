import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChatBubbleOutlineIconSvg from '../../assets/Communication/chat_bubble_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChatBubbleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ChatBubbleOutlineIcon';

const ChatBubbleOutlineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ChatBubbleOutlineIcon;
