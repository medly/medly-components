import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwitchVideoIconSvg from '../../assets/Image/switch_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwitchVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SwitchVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SwitchVideoIcon.Style = SvgIcon;
SwitchVideoIcon.displayName = 'SwitchVideoIcon';

export default SwitchVideoIcon
