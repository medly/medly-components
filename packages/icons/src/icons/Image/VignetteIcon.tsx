import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VignetteIconSvg from '../../assets/Image/vignette_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VignetteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VignetteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VignetteIcon.Style = SvgIcon;
VignetteIcon.displayName = 'VignetteIcon';

export default VignetteIcon
