import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FullscreenIconSvg from '../../assets/Navigation/fullscreen_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FullscreenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FullscreenIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FullscreenIcon.Style = SvgIcon;
FullscreenIcon.displayName = 'FullscreenIcon';

export default FullscreenIcon
