import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalShippingIconSvg from '../../assets/Maps/local_shipping_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalShippingIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalShippingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalShippingIcon.Style = SvgIcon;
LocalShippingIcon.displayName = 'LocalShippingIcon';

export default LocalShippingIcon
