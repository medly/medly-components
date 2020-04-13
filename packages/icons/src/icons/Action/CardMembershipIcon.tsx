import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CardMembershipIconSvg from '../../assets/Action/card_membership_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CardMembershipIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CardMembershipIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CardMembershipIcon.Style = SvgIcon;
CardMembershipIcon.displayName = 'CardMembershipIcon';

export default CardMembershipIcon
