import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PermPhoneMsgIconSvg from '../../assets/Action/perm_phone_msg_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermPhoneMsgIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermPhoneMsgIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermPhoneMsgIcon.Style = SvgIcon;
PermPhoneMsgIcon.displayName = 'PermPhoneMsgIcon';

export default PermPhoneMsgIcon
