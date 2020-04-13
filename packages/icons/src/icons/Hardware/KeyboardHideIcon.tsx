import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardHideIconSvg from '../../assets/Hardware/keyboard_hide_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardHideIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardHideIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardHideIcon.Style = SvgIcon;
KeyboardHideIcon.displayName = 'KeyboardHideIcon';

export default KeyboardHideIcon
