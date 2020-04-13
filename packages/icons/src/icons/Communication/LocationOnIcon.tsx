import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocationOnIconSvg from '../../assets/Communication/location_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocationOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocationOnIcon.Style = SvgIcon;
LocationOnIcon.displayName = 'LocationOnIcon';

export default LocationOnIcon
