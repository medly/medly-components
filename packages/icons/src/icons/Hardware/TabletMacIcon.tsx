import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TabletMacIconSvg from '../../assets/Hardware/tablet_mac_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabletMacIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TabletMacIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TabletMacIcon.Style = SvgIcon;
TabletMacIcon.displayName = 'TabletMacIcon';

export default TabletMacIcon
