import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsTransitIconSvg from '../../assets/Maps/directions_transit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsTransitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsTransitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsTransitIcon.Style = SvgIcon;
DirectionsTransitIcon.displayName = 'DirectionsTransitIcon';

export default DirectionsTransitIcon
