import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExtensionIconSvg from '../../assets/Action/extension_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExtensionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExtensionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExtensionIcon.Style = SvgIcon;
ExtensionIcon.displayName = 'ExtensionIcon';

export default ExtensionIcon
