import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MouseIconSvg from '../../assets/Hardware/mouse_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MouseIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MouseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MouseIcon.Style = SvgIcon;
MouseIcon.displayName = 'MouseIcon';

export default MouseIcon
