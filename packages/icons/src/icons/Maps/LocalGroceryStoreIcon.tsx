import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalGroceryStoreIconSvg from '../../assets/Maps/local_grocery_store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalGroceryStoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'LocalGroceryStoreIcon';

const LocalGroceryStoreIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default LocalGroceryStoreIcon
