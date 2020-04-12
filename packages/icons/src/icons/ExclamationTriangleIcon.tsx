import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExclamationTriangleIconSvg from '../assets/ExclamationTriangle.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const ExclamationTriangleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExclamationTriangleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExclamationTriangleIcon.Style = SvgIcon;
ExclamationTriangleIcon.displayName = 'ExclamationTriangleIcon';

export default ExclamationTriangleIcon
