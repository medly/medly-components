import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OpenInNewIconSvg from '../../assets/Action/open_in_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenInNewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OpenInNewIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OpenInNewIcon.Style = SvgIcon;
OpenInNewIcon.displayName = 'OpenInNewIcon';

export default OpenInNewIcon
