import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CardTravelIconSvg from '../../assets/Action/card_travel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CardTravelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CardTravelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CardTravelIcon.Style = SvgIcon;
CardTravelIcon.displayName = 'CardTravelIcon';

export default CardTravelIcon
