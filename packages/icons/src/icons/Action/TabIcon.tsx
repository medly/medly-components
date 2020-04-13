import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TabIconSvg from '../../assets/Action/tab_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TabIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TabIcon.Style = SvgIcon;
TabIcon.displayName = 'TabIcon';

export default TabIcon
