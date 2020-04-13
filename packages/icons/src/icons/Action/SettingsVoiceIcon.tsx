import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsVoiceIconSvg from '../../assets/Action/settings_voice_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsVoiceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsVoiceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsVoiceIcon.Style = SvgIcon;
SettingsVoiceIcon.displayName = 'SettingsVoiceIcon';

export default SettingsVoiceIcon
