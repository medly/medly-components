import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermMediaIconSvg from '../../assets/Action/perm_media_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermMediaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermMediaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermMediaIcon.Style = SvgIcon;
PermMediaIcon.displayName = 'PermMediaIcon';

export default PermMediaIcon
