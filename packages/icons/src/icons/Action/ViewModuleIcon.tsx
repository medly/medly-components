import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewModuleIconSvg from '../../assets/Action/view_module_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewModuleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewModuleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewModuleIcon.Style = SvgIcon;
ViewModuleIcon.displayName = 'ViewModuleIcon';

export default ViewModuleIcon
