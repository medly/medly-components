import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ErrorOutlineIconSvg from '../../assets/Alert/error_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ErrorOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ErrorOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ErrorOutlineIcon.Style = SvgIcon;
ErrorOutlineIcon.displayName = 'ErrorOutlineIcon';

export default ErrorOutlineIcon
