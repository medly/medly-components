import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReceiptSvg from '../assets/Receipt.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const ReceiptIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReceiptSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReceiptIcon.Style = SvgIcon;
ReceiptIcon.displayName = 'ReceiptIcon';
