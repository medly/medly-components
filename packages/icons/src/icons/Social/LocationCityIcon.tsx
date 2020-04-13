import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocationCityIconSvg from '../../assets/Social/location_city_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationCityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocationCityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocationCityIcon.Style = SvgIcon;
LocationCityIcon.displayName = 'LocationCityIcon';

export default LocationCityIcon
