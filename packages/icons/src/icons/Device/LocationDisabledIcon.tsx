import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocationDisabledIconSvg from '../../assets/Device/location_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocationDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocationDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocationDisabledIcon.Style = SvgIcon;
LocationDisabledIcon.displayName = 'LocationDisabledIcon';

export default LocationDisabledIcon
