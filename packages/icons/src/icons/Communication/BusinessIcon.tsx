import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BusinessIconSvg from '../../assets/Communication/business_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BusinessIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BusinessIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BusinessIcon.Style = SvgIcon;
BusinessIcon.displayName = 'BusinessIcon';

export default BusinessIcon
