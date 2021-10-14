import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddShoppingCartIconSvg from '../../assets/Action/add_shopping_cart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddShoppingCartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AddShoppingCartIcon';

const AddShoppingCartIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AddShoppingCartIcon;
