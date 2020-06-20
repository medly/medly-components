import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LoyaltyIconSvg from '../../assets/Action/loyalty_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LoyaltyIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LoyaltyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LoyaltyIcon.Style = SvgIcon;
LoyaltyIcon.displayName = 'LoyaltyIcon';

export default LoyaltyIcon
