import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsApplicationsIconSvg from '../../assets/Action/settings_applications_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsApplicationsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsApplicationsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsApplicationsIcon.Style = SvgIcon;
SettingsApplicationsIcon.displayName = 'SettingsApplicationsIcon';

export default SettingsApplicationsIcon
