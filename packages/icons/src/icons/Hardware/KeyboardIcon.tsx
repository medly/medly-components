import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardIconSvg from '../../assets/Hardware/keyboard_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardIcon.Style = SvgIcon;
KeyboardIcon.displayName = 'KeyboardIcon';

export default KeyboardIcon
