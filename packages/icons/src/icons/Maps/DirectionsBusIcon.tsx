import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsBusIconSvg from '../../assets/Maps/directions_bus_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBusIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsBusIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsBusIcon.Style = SvgIcon;
DirectionsBusIcon.displayName = 'DirectionsBusIcon';

export default DirectionsBusIcon
