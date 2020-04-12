import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReceiptIconSvg from '../assets/Receipt.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const ReceiptIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReceiptIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReceiptIcon.Style = SvgIcon;
ReceiptIcon.displayName = 'ReceiptIcon';

export default ReceiptIcon
