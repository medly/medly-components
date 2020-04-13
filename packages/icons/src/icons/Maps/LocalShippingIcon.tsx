import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalShippingIconSvg from '../../assets/Maps/local_shipping_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalShippingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalShippingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalShippingIcon.Style = SvgIcon;
LocalShippingIcon.displayName = 'LocalShippingIcon';

export default LocalShippingIcon
