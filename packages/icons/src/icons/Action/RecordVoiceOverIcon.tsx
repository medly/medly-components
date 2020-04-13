import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RecordVoiceOverIconSvg from '../../assets/Action/record_voice_over_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RecordVoiceOverIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RecordVoiceOverIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RecordVoiceOverIcon.Style = SvgIcon;
RecordVoiceOverIcon.displayName = 'RecordVoiceOverIcon';

export default RecordVoiceOverIcon
