import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubscriptionsIconSvg from '../../assets/Media/subscriptions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubscriptionsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SubscriptionsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SubscriptionsIcon.Style = SvgIcon;
SubscriptionsIcon.displayName = 'SubscriptionsIcon';

export default SubscriptionsIcon
