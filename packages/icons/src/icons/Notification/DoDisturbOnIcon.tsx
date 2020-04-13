import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoDisturbOnIconSvg from '../../assets/Notification/do_disturb_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DoDisturbOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DoDisturbOnIcon.Style = SvgIcon;
DoDisturbOnIcon.displayName = 'DoDisturbOnIcon';

export default DoDisturbOnIcon
