import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DockIconSvg from '../../assets/Hardware/dock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DockIcon.Style = SvgIcon;
DockIcon.displayName = 'DockIcon';

export default DockIcon
