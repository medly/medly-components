import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsCarIconSvg from '../../assets/Maps/directions_car_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsCarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsCarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsCarIcon.Style = SvgIcon;
DirectionsCarIcon.displayName = 'DirectionsCarIcon';

export default DirectionsCarIcon
