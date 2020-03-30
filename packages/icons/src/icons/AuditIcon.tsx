import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AuditSvg from '../assets/Audit.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const AuditIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AuditSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AuditIcon.Style = SvgIcon;
AuditIcon.displayName = 'AuditIcon';
