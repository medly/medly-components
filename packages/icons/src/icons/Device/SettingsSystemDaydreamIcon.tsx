import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsSystemDaydreamIconSvg from '../../assets/Device/settings_system_daydream_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsSystemDaydreamIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsSystemDaydreamIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsSystemDaydreamIcon.Style = SvgIcon;
SettingsSystemDaydreamIcon.displayName = 'SettingsSystemDaydreamIcon';

export default SettingsSystemDaydreamIcon
