import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsBusIconSvg from '../../assets/Maps/directions_bus_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBusIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsBusIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsBusIcon.Style = SvgIcon;
DirectionsBusIcon.displayName = 'DirectionsBusIcon';

export default DirectionsBusIcon
