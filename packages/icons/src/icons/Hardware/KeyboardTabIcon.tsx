import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardTabIconSvg from '../../assets/Hardware/keyboard_tab_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardTabIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardTabIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardTabIcon.Style = SvgIcon;
KeyboardTabIcon.displayName = 'KeyboardTabIcon';

export default KeyboardTabIcon
