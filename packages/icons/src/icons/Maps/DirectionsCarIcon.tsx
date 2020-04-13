import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsCarIconSvg from '../../assets/Maps/directions_car_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsCarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DirectionsCarIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DirectionsCarIcon.Style = SvgIcon;
DirectionsCarIcon.displayName = 'DirectionsCarIcon';

export default DirectionsCarIcon
