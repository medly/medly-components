import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LastPageIconSvg from '../../assets/Navigation/last_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LastPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LastPageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LastPageIcon.Style = SvgIcon;
LastPageIcon.displayName = 'LastPageIcon';

export default LastPageIcon
