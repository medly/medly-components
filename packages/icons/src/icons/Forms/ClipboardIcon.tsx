import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClipboardIconSvg from '../../assets/Forms/Clipboard.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClipboardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClipboardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClipboardIcon.Style = SvgIcon;
ClipboardIcon.displayName = 'ClipboardIcon';

export default ClipboardIcon
