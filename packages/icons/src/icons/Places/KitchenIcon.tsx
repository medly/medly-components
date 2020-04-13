import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KitchenIconSvg from '../../assets/Places/kitchen_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KitchenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KitchenIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KitchenIcon.Style = SvgIcon;
KitchenIcon.displayName = 'KitchenIcon';

export default KitchenIcon
