import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RedeemIconSvg from '../../assets/Action/redeem_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RedeemIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RedeemIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RedeemIcon.Style = SvgIcon;
RedeemIcon.displayName = 'RedeemIcon';

export default RedeemIcon
