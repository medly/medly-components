import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalHotelIconSvg from '../../assets/Maps/local_hotel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalHotelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalHotelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalHotelIcon.Style = SvgIcon;
LocalHotelIcon.displayName = 'LocalHotelIcon';

export default LocalHotelIcon
