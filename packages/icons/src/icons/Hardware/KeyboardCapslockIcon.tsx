import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardCapslockIconSvg from '../../assets/Hardware/keyboard_capslock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardCapslockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardCapslockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardCapslockIcon.Style = SvgIcon;
KeyboardCapslockIcon.displayName = 'KeyboardCapslockIcon';

export default KeyboardCapslockIcon
