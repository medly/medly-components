import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoDisturbAltIconSvg from '../../assets/Notification/do_disturb_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DoDisturbAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DoDisturbAltIcon.Style = SvgIcon;
DoDisturbAltIcon.displayName = 'DoDisturbAltIcon';

export default DoDisturbAltIcon
