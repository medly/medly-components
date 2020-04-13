import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsIconSvg from '../../assets/Action/settings_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsIcon.Style = SvgIcon;
SettingsIcon.displayName = 'SettingsIcon';

export default SettingsIcon
