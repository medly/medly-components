import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EnhancedEncryptionIconSvg from '../../assets/Notification/enhanced_encryption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EnhancedEncryptionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EnhancedEncryptionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EnhancedEncryptionIcon.Style = SvgIcon;
EnhancedEncryptionIcon.displayName = 'EnhancedEncryptionIcon';

export default EnhancedEncryptionIcon
