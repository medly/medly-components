import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AllInboxIconSvg from '../../assets/Action/all_inbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AllInboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AllInboxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AllInboxIcon.Style = SvgIcon;
AllInboxIcon.displayName = 'AllInboxIcon';

export default AllInboxIcon
