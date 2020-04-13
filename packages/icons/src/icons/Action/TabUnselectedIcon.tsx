import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TabUnselectedIconSvg from '../../assets/Action/tab_unselected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabUnselectedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TabUnselectedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TabUnselectedIcon.Style = SvgIcon;
TabUnselectedIcon.displayName = 'TabUnselectedIcon';

export default TabUnselectedIcon
