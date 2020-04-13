import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsInputComponentIconSvg from '../../assets/Action/settings_input_component_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputComponentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsInputComponentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsInputComponentIcon.Style = SvgIcon;
SettingsInputComponentIcon.displayName = 'SettingsInputComponentIcon';

export default SettingsInputComponentIcon
