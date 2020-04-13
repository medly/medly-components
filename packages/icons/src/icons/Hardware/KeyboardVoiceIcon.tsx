import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardVoiceIconSvg from '../../assets/Hardware/keyboard_voice_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardVoiceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardVoiceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardVoiceIcon.Style = SvgIcon;
KeyboardVoiceIcon.displayName = 'KeyboardVoiceIcon';

export default KeyboardVoiceIcon
