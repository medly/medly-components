import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsSubwayIconSvg from '../../assets/Maps/directions_subway_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsSubwayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsSubwayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsSubwayIcon.Style = SvgIcon;
DirectionsSubwayIcon.displayName = 'DirectionsSubwayIcon';

export default DirectionsSubwayIcon
