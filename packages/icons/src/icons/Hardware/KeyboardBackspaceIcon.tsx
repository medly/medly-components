import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardBackspaceIconSvg from '../../assets/Hardware/keyboard_backspace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardBackspaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardBackspaceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardBackspaceIcon.Style = SvgIcon;
KeyboardBackspaceIcon.displayName = 'KeyboardBackspaceIcon';

export default KeyboardBackspaceIcon
