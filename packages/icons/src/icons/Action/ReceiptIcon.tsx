import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReceiptIconSvg from '../../assets/Action/receipt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReceiptIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReceiptIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReceiptIcon.Style = SvgIcon;
ReceiptIcon.displayName = 'ReceiptIcon';

export default ReceiptIcon
