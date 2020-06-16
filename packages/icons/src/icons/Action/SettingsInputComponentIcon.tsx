import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsInputComponentIconSvg from '../../assets/Action/settings_input_component_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputComponentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsInputComponentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsInputComponentIcon.Style = SvgIcon;
SettingsInputComponentIcon.displayName = 'SettingsInputComponentIcon';

export default SettingsInputComponentIcon
