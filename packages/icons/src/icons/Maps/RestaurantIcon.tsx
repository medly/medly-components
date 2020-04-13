import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestaurantIconSvg from '../../assets/Maps/restaurant_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestaurantIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RestaurantIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RestaurantIcon.Style = SvgIcon;
RestaurantIcon.displayName = 'RestaurantIcon';

export default RestaurantIcon
