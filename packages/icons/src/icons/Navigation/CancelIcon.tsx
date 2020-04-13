import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CancelIconSvg from '../../assets/Navigation/cancel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CancelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CancelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CancelIcon.Style = SvgIcon;
CancelIcon.displayName = 'CancelIcon';

export default CancelIcon
