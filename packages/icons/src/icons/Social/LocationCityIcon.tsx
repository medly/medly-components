import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocationCityIconSvg from '../../assets/Social/location_city_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationCityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocationCityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocationCityIcon.Style = SvgIcon;
LocationCityIcon.displayName = 'LocationCityIcon';

export default LocationCityIcon
