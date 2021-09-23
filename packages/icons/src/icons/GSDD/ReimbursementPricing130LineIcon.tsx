import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReimbursementPricing130LineIconSvg from '../../assets/GSDD/Reimbursement_Pricing_130_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReimbursementPricing130LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ReimbursementPricing130LineIcon';

const ReimbursementPricing130LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default ReimbursementPricing130LineIcon
