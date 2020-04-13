import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HotelIconSvg from '../../assets/Maps/hotel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HotelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HotelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HotelIcon.Style = SvgIcon;
HotelIcon.displayName = 'HotelIcon';

export default HotelIcon
