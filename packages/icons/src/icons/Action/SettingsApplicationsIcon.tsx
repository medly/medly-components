import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsApplicationsIconSvg from '../../assets/Action/settings_applications_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsApplicationsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsApplicationsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsApplicationsIcon.Style = SvgIcon;
SettingsApplicationsIcon.displayName = 'SettingsApplicationsIcon';

export default SettingsApplicationsIcon
