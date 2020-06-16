import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhoneIphoneIconSvg from '../../assets/Hardware/phone_iphone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneIphoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneIphoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneIphoneIcon.Style = SvgIcon;
PhoneIphoneIcon.displayName = 'PhoneIphoneIcon';

export default PhoneIphoneIcon
