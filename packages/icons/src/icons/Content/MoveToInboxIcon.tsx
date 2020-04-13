import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoveToInboxIconSvg from '../../assets/Content/move_to_inbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoveToInboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoveToInboxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoveToInboxIcon.Style = SvgIcon;
MoveToInboxIcon.displayName = 'MoveToInboxIcon';

export default MoveToInboxIcon
