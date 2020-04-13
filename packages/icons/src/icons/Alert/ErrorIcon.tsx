import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ErrorIconSvg from '../../assets/Alert/error_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ErrorIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ErrorIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ErrorIcon.Style = SvgIcon;
ErrorIcon.displayName = 'ErrorIcon';

export default ErrorIcon
