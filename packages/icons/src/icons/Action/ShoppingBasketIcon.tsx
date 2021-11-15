import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import ShoppingBasketIconSvg from '../../assets/Action/shopping_basket_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShoppingBasketIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ShoppingBasketIcon';

const ShoppingBasketIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ShoppingBasketIcon;
