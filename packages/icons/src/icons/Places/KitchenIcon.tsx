import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KitchenIconSvg from '../../assets/Places/kitchen_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KitchenIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KitchenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KitchenIcon.Style = SvgIcon;
KitchenIcon.displayName = 'KitchenIcon';

export default KitchenIcon
