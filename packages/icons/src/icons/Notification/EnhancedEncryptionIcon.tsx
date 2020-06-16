import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EnhancedEncryptionIconSvg from '../../assets/Notification/enhanced_encryption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EnhancedEncryptionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EnhancedEncryptionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EnhancedEncryptionIcon.Style = SvgIcon;
EnhancedEncryptionIcon.displayName = 'EnhancedEncryptionIcon';

export default EnhancedEncryptionIcon
