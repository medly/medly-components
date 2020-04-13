import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SecurityIconSvg from '../../assets/Hardware/security_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SecurityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SecurityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SecurityIcon.Style = SvgIcon;
SecurityIcon.displayName = 'SecurityIcon';

export default SecurityIcon
