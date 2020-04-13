import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestaurantMenuIconSvg from '../../assets/Maps/restaurant_menu_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestaurantMenuIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RestaurantMenuIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RestaurantMenuIcon.Style = SvgIcon;
RestaurantMenuIcon.displayName = 'RestaurantMenuIcon';

export default RestaurantMenuIcon
