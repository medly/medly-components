import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NetworkCellIconSvg from '../../assets/Device/network_cell_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkCellIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NetworkCellIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NetworkCellIcon.Style = SvgIcon;
NetworkCellIcon.displayName = 'NetworkCellIcon';

export default NetworkCellIcon
