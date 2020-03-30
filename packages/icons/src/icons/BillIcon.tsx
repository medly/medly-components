import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BillSvg from '../assets/Bill.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const BillIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BillSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BillIcon.Style = SvgIcon;
BillIcon.displayName = 'BillIcon';
