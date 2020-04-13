import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LoyaltyIconSvg from '../../assets/Action/loyalty_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LoyaltyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LoyaltyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LoyaltyIcon.Style = SvgIcon;
LoyaltyIcon.displayName = 'LoyaltyIcon';

export default LoyaltyIcon
