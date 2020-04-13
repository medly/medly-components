import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StoreIconSvg from '../../assets/Action/store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StoreIcon.Style = SvgIcon;
StoreIcon.displayName = 'StoreIcon';

export default StoreIcon
