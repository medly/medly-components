import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BackspaceIconSvg from '../../assets/Content/backspace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BackspaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BackspaceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BackspaceIcon.Style = SvgIcon;
BackspaceIcon.displayName = 'BackspaceIcon';

export default BackspaceIcon
