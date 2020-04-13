import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsBoatIconSvg from '../../assets/Maps/directions_boat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBoatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsBoatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsBoatIcon.Style = SvgIcon;
DirectionsBoatIcon.displayName = 'DirectionsBoatIcon';

export default DirectionsBoatIcon
