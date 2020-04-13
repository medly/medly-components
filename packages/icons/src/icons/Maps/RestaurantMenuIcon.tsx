import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestaurantMenuIconSvg from '../../assets/Maps/restaurant_menu_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestaurantMenuIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestaurantMenuIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RestaurantMenuIcon.Style = SvgIcon;
RestaurantMenuIcon.displayName = 'RestaurantMenuIcon';

export default RestaurantMenuIcon
