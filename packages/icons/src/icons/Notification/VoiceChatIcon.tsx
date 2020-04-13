import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VoiceChatIconSvg from '../../assets/Notification/voice_chat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VoiceChatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VoiceChatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VoiceChatIcon.Style = SvgIcon;
VoiceChatIcon.displayName = 'VoiceChatIcon';

export default VoiceChatIcon
