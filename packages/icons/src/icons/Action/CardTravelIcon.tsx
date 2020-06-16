import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CardTravelIconSvg from '../../assets/Action/card_travel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CardTravelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CardTravelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CardTravelIcon.Style = SvgIcon;
CardTravelIcon.displayName = 'CardTravelIcon';

export default CardTravelIcon
