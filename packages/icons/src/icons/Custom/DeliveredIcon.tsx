import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeliveredIconSvg from '../../assets/Custom/delivered_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeliveredIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeliveredIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeliveredIcon.Style = SvgIcon;
DeliveredIcon.displayName = 'DeliveredIcon';

export default DeliveredIcon
