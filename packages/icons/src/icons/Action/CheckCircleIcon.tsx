import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckCircleIconSvg from '../../assets/Action/check_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckCircleIcon.Style = SvgIcon;
CheckCircleIcon.displayName = 'CheckCircleIcon';

export default CheckCircleIcon
