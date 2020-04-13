import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpeakerGroupIconSvg from '../../assets/Hardware/speaker_group_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerGroupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SpeakerGroupIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SpeakerGroupIcon.Style = SvgIcon;
SpeakerGroupIcon.displayName = 'SpeakerGroupIcon';

export default SpeakerGroupIcon
