import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CardMembershipIconSvg from '../../assets/Action/card_membership_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CardMembershipIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CardMembershipIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CardMembershipIcon.Style = SvgIcon;
CardMembershipIcon.displayName = 'CardMembershipIcon';

export default CardMembershipIcon
