import { SvgIcon, SvgIconProps } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AuditSvg from '../assets/Audit.svg';

export const AuditIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AuditSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));
AuditIcon.Style = SvgIcon;
AuditIcon.displayName = 'Audit';
