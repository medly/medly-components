import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsPowerIconSvg from '../../assets/Action/settings_power_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsPowerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsPowerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsPowerIcon.Style = SvgIcon;
SettingsPowerIcon.displayName = 'SettingsPowerIcon';

export default SettingsPowerIcon
