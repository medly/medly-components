import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MapIconSvg from '../../assets/Maps/map_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MapIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MapIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MapIcon.Style = SvgIcon;
MapIcon.displayName = 'MapIcon';

export default MapIcon
