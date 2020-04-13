import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsBrightnessIconSvg from '../../assets/Action/settings_brightness_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsBrightnessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsBrightnessIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsBrightnessIcon.Style = SvgIcon;
SettingsBrightnessIcon.displayName = 'SettingsBrightnessIcon';

export default SettingsBrightnessIcon
