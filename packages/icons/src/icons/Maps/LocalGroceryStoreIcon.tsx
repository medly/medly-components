import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalGroceryStoreIconSvg from '../../assets/Maps/local_grocery_store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalGroceryStoreIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalGroceryStoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalGroceryStoreIcon.Style = SvgIcon;
LocalGroceryStoreIcon.displayName = 'LocalGroceryStoreIcon';

export default LocalGroceryStoreIcon
