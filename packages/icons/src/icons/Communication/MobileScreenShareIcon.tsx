import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MobileScreenShareIconSvg from '../../assets/Communication/mobile_screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MobileScreenShareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MobileScreenShareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MobileScreenShareIcon.Style = SvgIcon;
MobileScreenShareIcon.displayName = 'MobileScreenShareIcon';

export default MobileScreenShareIcon
