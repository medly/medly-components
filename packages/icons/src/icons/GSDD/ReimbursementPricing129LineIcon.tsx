import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReimbursementPricing129LineIconSvg from '../../assets/GSDD/Reimbursement_Pricing_129_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReimbursementPricing129LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReimbursementPricing129LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReimbursementPricing129LineIcon.Style = SvgIcon;
ReimbursementPricing129LineIcon.displayName = 'ReimbursementPricing129LineIcon';

export default ReimbursementPricing129LineIcon
