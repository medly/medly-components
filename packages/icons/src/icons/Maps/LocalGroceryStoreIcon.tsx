import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalGroceryStoreIconSvg from '../../assets/Maps/local_grocery_store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalGroceryStoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalGroceryStoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalGroceryStoreIcon.Style = SvgIcon;
LocalGroceryStoreIcon.displayName = 'LocalGroceryStoreIcon';

export default LocalGroceryStoreIcon
