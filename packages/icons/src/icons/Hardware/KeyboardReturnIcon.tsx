import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardReturnIconSvg from '../../assets/Hardware/keyboard_return_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardReturnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardReturnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardReturnIcon.Style = SvgIcon;
KeyboardReturnIcon.displayName = 'KeyboardReturnIcon';

export default KeyboardReturnIcon
