import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TransferWithinAStationIconSvg from '../../assets/Maps/transfer_within_a_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TransferWithinAStationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TransferWithinAStationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TransferWithinAStationIcon.Style = SvgIcon;
TransferWithinAStationIcon.displayName = 'TransferWithinAStationIcon';

export default TransferWithinAStationIcon
