import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShopTwoIconSvg from '../../assets/Action/shop_two_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShopTwoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShopTwoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShopTwoIcon.Style = SvgIcon;
ShopTwoIcon.displayName = 'ShopTwoIcon';

export default ShopTwoIcon
