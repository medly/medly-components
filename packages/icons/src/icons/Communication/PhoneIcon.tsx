import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhoneIconSvg from '../../assets/Communication/phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhoneIcon.Style = SvgIcon;
PhoneIcon.displayName = 'PhoneIcon';

export default PhoneIcon
