import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsWalkIconSvg from '../../assets/Maps/directions_walk_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsWalkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsWalkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsWalkIcon.Style = SvgIcon;
DirectionsWalkIcon.displayName = 'DirectionsWalkIcon';

export default DirectionsWalkIcon
