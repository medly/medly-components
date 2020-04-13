import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GamepadIconSvg from '../../assets/Hardware/gamepad_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GamepadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GamepadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GamepadIcon.Style = SvgIcon;
GamepadIcon.displayName = 'GamepadIcon';

export default GamepadIcon
