import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KeyboardIconSvg from '../../assets/Hardware/keyboard_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardIcon.Style = SvgIcon;
KeyboardIcon.displayName = 'KeyboardIcon';

export default KeyboardIcon
