import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExclamationCircleIconSvg from '../assets/ExclamationCircle.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const ExclamationCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExclamationCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExclamationCircleIcon.Style = SvgIcon;
ExclamationCircleIcon.displayName = 'ExclamationCircleIcon';

export default ExclamationCircleIcon
