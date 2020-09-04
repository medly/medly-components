import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReimbursementPricing130LineIconSvg from '../../assets/GSDD/Reimbursement_Pricing_130_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReimbursementPricing130LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReimbursementPricing130LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReimbursementPricing130LineIcon.Style = SvgIcon;
ReimbursementPricing130LineIcon.displayName = 'ReimbursementPricing130LineIcon';

export default ReimbursementPricing130LineIcon
