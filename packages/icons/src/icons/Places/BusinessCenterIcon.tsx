import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BusinessCenterIconSvg from '../../assets/Places/business_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BusinessCenterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BusinessCenterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BusinessCenterIcon.Style = SvgIcon;
BusinessCenterIcon.displayName = 'BusinessCenterIcon';

export default BusinessCenterIcon
