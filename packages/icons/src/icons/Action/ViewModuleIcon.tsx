import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewModuleIconSvg from '../../assets/Action/view_module_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewModuleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewModuleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewModuleIcon.Style = SvgIcon;
ViewModuleIcon.displayName = 'ViewModuleIcon';

export default ViewModuleIcon
