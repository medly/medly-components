import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhonelinkRingIconSvg from '../../assets/Communication/phonelink_ring_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkRingIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonelinkRingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonelinkRingIcon.Style = SvgIcon;
PhonelinkRingIcon.displayName = 'PhonelinkRingIcon';

export default PhonelinkRingIcon
