import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PartyModeIconSvg from '../../assets/Social/party_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PartyModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PartyModeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PartyModeIcon.Style = SvgIcon;
PartyModeIcon.displayName = 'PartyModeIcon';

export default PartyModeIcon
