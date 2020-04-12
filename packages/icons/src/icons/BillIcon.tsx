import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BillIconSvg from '../assets/Bill.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const BillIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BillIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BillIcon.Style = SvgIcon;
BillIcon.displayName = 'BillIcon';

export default BillIcon
