import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DashboardIconSvg from '../../assets/Action/dashboard_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DashboardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DashboardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DashboardIcon.Style = SvgIcon;
DashboardIcon.displayName = 'DashboardIcon';

export default DashboardIcon
