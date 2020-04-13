import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsIconSvg from '../../assets/Maps/directions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsIcon.Style = SvgIcon;
DirectionsIcon.displayName = 'DirectionsIcon';

export default DirectionsIcon
