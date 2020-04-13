import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoEncryptionIconSvg from '../../assets/Notification/no_encryption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoEncryptionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NoEncryptionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NoEncryptionIcon.Style = SvgIcon;
NoEncryptionIcon.displayName = 'NoEncryptionIcon';

export default NoEncryptionIcon
