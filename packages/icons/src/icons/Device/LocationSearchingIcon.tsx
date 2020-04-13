import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocationSearchingIconSvg from '../../assets/Device/location_searching_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationSearchingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocationSearchingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocationSearchingIcon.Style = SvgIcon;
LocationSearchingIcon.displayName = 'LocationSearchingIcon';

export default LocationSearchingIcon
