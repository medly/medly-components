import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TransferWithinAStationIconSvg from '../../assets/Maps/transfer_within_a_station_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TransferWithinAStationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'TransferWithinAStationIcon';

const TransferWithinAStationIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default TransferWithinAStationIcon
