import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WifiTetheringIconSvg from '../../assets/Device/wifi_tethering_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiTetheringIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WifiTetheringIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WifiTetheringIcon.Style = SvgIcon;
WifiTetheringIcon.displayName = 'WifiTetheringIcon';

export default WifiTetheringIcon
