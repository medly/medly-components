import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsEthernetIconSvg from '../../assets/Action/settings_ethernet_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsEthernetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SettingsEthernetIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SettingsEthernetIcon.Style = SvgIcon;
SettingsEthernetIcon.displayName = 'SettingsEthernetIcon';

export default SettingsEthernetIcon
