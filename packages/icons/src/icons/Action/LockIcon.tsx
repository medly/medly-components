import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LockIconSvg from '../../assets/Action/lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LockIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LockIcon.Style = SvgIcon;
LockIcon.displayName = 'LockIcon';

export default LockIcon
