import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsBrightnessIconSvg from '../../assets/Action/settings_brightness_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsBrightnessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsBrightnessIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsBrightnessIcon.Style = SvgIcon;
SettingsBrightnessIcon.displayName = 'SettingsBrightnessIcon';

export default SettingsBrightnessIcon
