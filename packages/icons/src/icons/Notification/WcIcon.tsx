import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WcIconSvg from '../../assets/Notification/wc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WcIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WcIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WcIcon.Style = SvgIcon;
WcIcon.displayName = 'WcIcon';

export default WcIcon
