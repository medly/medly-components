import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReceiptOutlinedIconSvg from '../../assets/Action/receipt_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReceiptOutlinedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReceiptOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReceiptOutlinedIcon.Style = SvgIcon;
ReceiptOutlinedIcon.displayName = 'ReceiptOutlinedIcon';

export default ReceiptOutlinedIcon
