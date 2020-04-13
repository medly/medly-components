import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsBikeIconSvg from '../../assets/Maps/directions_bike_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBikeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsBikeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsBikeIcon.Style = SvgIcon;
DirectionsBikeIcon.displayName = 'DirectionsBikeIcon';

export default DirectionsBikeIcon
