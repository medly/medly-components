import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TransferWithinAStationIconSvg from '../../assets/Maps/transfer_within_a_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TransferWithinAStationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TransferWithinAStationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TransferWithinAStationIcon.Style = SvgIcon;
TransferWithinAStationIcon.displayName = 'TransferWithinAStationIcon';

export default TransferWithinAStationIcon
