import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoDisturbOffIconSvg from '../../assets/Notification/do_disturb_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DoDisturbOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DoDisturbOffIcon.Style = SvgIcon;
DoDisturbOffIcon.displayName = 'DoDisturbOffIcon';

export default DoDisturbOffIcon
