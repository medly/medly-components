import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsInputHdmiIconSvg from '../../assets/Action/settings_input_hdmi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputHdmiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsInputHdmiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsInputHdmiIcon.Style = SvgIcon;
SettingsInputHdmiIcon.displayName = 'SettingsInputHdmiIcon';

export default SettingsInputHdmiIcon
