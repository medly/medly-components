import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LinkIconSvg from '../../assets/Content/link_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LinkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LinkIcon.Style = SvgIcon;
LinkIcon.displayName = 'LinkIcon';

export default LinkIcon
