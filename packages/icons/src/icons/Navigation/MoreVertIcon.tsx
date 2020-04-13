import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoreVertIconSvg from '../../assets/Navigation/more_vert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoreVertIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoreVertIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoreVertIcon.Style = SvgIcon;
MoreVertIcon.displayName = 'MoreVertIcon';

export default MoreVertIcon
