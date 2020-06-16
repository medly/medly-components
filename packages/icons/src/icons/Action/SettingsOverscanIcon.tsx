import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsOverscanIconSvg from '../../assets/Action/settings_overscan_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsOverscanIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsOverscanIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsOverscanIcon.Style = SvgIcon;
SettingsOverscanIcon.displayName = 'SettingsOverscanIcon';

export default SettingsOverscanIcon
