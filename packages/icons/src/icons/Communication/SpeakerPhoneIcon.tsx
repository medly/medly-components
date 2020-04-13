import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpeakerPhoneIconSvg from '../../assets/Communication/speaker_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerPhoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SpeakerPhoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SpeakerPhoneIcon.Style = SvgIcon;
SpeakerPhoneIcon.displayName = 'SpeakerPhoneIcon';

export default SpeakerPhoneIcon
