import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OpenInBrowserIconSvg from '../../assets/Action/open_in_browser_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenInBrowserIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OpenInBrowserIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OpenInBrowserIcon.Style = SvgIcon;
OpenInBrowserIcon.displayName = 'OpenInBrowserIcon';

export default OpenInBrowserIcon
