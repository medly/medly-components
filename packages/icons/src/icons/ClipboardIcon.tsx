// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ClipboardSvg from '../assets/Clipboard.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ClipboardIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ClipboardSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ClipboardIcon.Style = SvgIcon;
ClipboardIcon.displayName = 'ClipboardIcon';
export default ClipboardIcon;
