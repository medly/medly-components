import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsRemoteIconSvg from '../../assets/Action/settings_remote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsRemoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsRemoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsRemoteIcon.Style = SvgIcon;
SettingsRemoteIcon.displayName = 'SettingsRemoteIcon';

export default SettingsRemoteIcon
