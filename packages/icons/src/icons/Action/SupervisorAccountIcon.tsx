import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SupervisorAccountIconSvg from '../../assets/Action/supervisor_account_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SupervisorAccountIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SupervisorAccountIcon';

const SupervisorAccountIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SupervisorAccountIcon
