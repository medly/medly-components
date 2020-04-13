import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideocamOffIconSvg from '../../assets/Media/videocam_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideocamOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VideocamOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VideocamOffIcon.Style = SvgIcon;
VideocamOffIcon.displayName = 'VideocamOffIcon';

export default VideocamOffIcon
