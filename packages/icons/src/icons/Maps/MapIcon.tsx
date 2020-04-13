import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MapIconSvg from '../../assets/Maps/map_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MapIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MapIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MapIcon.Style = SvgIcon;
MapIcon.displayName = 'MapIcon';

export default MapIcon
