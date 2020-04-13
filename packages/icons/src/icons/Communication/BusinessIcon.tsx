import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BusinessIconSvg from '../../assets/Communication/business_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BusinessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BusinessIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BusinessIcon.Style = SvgIcon;
BusinessIcon.displayName = 'BusinessIcon';

export default BusinessIcon
