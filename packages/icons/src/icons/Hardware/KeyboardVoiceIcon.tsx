import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardVoiceIconSvg from '../../assets/Hardware/keyboard_voice_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardVoiceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardVoiceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardVoiceIcon.Style = SvgIcon;
KeyboardVoiceIcon.displayName = 'KeyboardVoiceIcon';

export default KeyboardVoiceIcon
