import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShopIconSvg from '../../assets/Action/shop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ShopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ShopIcon.Style = SvgIcon;
ShopIcon.displayName = 'ShopIcon';

export default ShopIcon
