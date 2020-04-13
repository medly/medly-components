import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardTabIconSvg from '../../assets/Hardware/keyboard_tab_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardTabIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardTabIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardTabIcon.Style = SvgIcon;
KeyboardTabIcon.displayName = 'KeyboardTabIcon';

export default KeyboardTabIcon
