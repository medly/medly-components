import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VoicemailIconSvg from '../../assets/Communication/voicemail_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VoicemailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VoicemailIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VoicemailIcon.Style = SvgIcon;
VoicemailIcon.displayName = 'VoicemailIcon';

export default VoicemailIcon
