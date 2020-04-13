import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CellWifiIconSvg from '../../assets/Communication/cell_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CellWifiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CellWifiIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CellWifiIcon.Style = SvgIcon;
CellWifiIcon.displayName = 'CellWifiIcon';

export default CellWifiIcon
