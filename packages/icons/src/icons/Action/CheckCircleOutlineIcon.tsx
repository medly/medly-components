import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckCircleOutlineIconSvg from '../../assets/Action/check_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckCircleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckCircleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckCircleOutlineIcon.Style = SvgIcon;
CheckCircleOutlineIcon.displayName = 'CheckCircleOutlineIcon';

export default CheckCircleOutlineIcon
