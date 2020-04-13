import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsVoiceIconSvg from '../../assets/Action/settings_voice_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsVoiceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsVoiceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsVoiceIcon.Style = SvgIcon;
SettingsVoiceIcon.displayName = 'SettingsVoiceIcon';

export default SettingsVoiceIcon
