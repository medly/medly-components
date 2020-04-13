import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpeakerNotesOffIconSvg from '../../assets/Action/speaker_notes_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerNotesOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SpeakerNotesOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SpeakerNotesOffIcon.Style = SvgIcon;
SpeakerNotesOffIcon.displayName = 'SpeakerNotesOffIcon';

export default SpeakerNotesOffIcon
