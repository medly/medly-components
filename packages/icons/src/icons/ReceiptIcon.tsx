import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReceiptSvg from '../assets/Receipt.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ReceiptIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReceiptSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReceiptIcon.Style = SvgIcon;
ReceiptIcon.displayName = 'ReceiptIcon';
