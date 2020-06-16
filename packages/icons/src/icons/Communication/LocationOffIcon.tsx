import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocationOffIconSvg from '../../assets/Communication/location_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocationOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocationOffIcon.Style = SvgIcon;
LocationOffIcon.displayName = 'LocationOffIcon';

export default LocationOffIcon
