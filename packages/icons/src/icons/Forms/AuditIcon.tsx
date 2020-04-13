import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AuditIconSvg from '../../assets/Forms/Audit.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AuditIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AuditIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AuditIcon.Style = SvgIcon;
AuditIcon.displayName = 'AuditIcon';

export default AuditIcon
