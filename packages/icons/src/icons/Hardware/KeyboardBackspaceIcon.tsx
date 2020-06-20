import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KeyboardBackspaceIconSvg from '../../assets/Hardware/keyboard_backspace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardBackspaceIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardBackspaceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardBackspaceIcon.Style = SvgIcon;
KeyboardBackspaceIcon.displayName = 'KeyboardBackspaceIcon';

export default KeyboardBackspaceIcon
