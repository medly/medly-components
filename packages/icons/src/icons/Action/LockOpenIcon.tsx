import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LockOpenIconSvg from '../../assets/Action/lock_open_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LockOpenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LockOpenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LockOpenIcon.Style = SvgIcon;
LockOpenIcon.displayName = 'LockOpenIcon';

export default LockOpenIcon
