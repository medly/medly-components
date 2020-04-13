import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HeadsetMicIconSvg from '../../assets/Hardware/headset_mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HeadsetMicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HeadsetMicIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HeadsetMicIcon.Style = SvgIcon;
HeadsetMicIcon.displayName = 'HeadsetMicIcon';

export default HeadsetMicIcon
