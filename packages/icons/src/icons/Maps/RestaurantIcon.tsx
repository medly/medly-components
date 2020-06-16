import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RestaurantIconSvg from '../../assets/Maps/restaurant_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestaurantIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestaurantIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RestaurantIcon.Style = SvgIcon;
RestaurantIcon.displayName = 'RestaurantIcon';

export default RestaurantIcon
