import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MouseIconSvg from '../../assets/Hardware/mouse_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MouseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MouseIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MouseIcon.Style = SvgIcon;
MouseIcon.displayName = 'MouseIcon';

export default MouseIcon
