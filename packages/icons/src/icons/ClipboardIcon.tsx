import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClipboardSvg from '../assets/Clipboard.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const ClipboardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClipboardSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClipboardIcon.Style = SvgIcon;
ClipboardIcon.displayName = 'ClipboardIcon';
