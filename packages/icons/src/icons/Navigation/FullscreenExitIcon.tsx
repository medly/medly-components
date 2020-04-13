import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FullscreenExitIconSvg from '../../assets/Navigation/fullscreen_exit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FullscreenExitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FullscreenExitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FullscreenExitIcon.Style = SvgIcon;
FullscreenExitIcon.displayName = 'FullscreenExitIcon';

export default FullscreenExitIcon
