import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenShareIconSvg from '../../assets/Communication/screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenShareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScreenShareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScreenShareIcon.Style = SvgIcon;
ScreenShareIcon.displayName = 'ScreenShareIcon';

export default ScreenShareIcon
