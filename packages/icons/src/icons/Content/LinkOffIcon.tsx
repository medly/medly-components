import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LinkOffIconSvg from '../../assets/Content/link_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LinkOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LinkOffIcon.Style = SvgIcon;
LinkOffIcon.displayName = 'LinkOffIcon';

export default LinkOffIcon
