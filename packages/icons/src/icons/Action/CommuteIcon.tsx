import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CommuteIconSvg from '../../assets/Action/commute_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CommuteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CommuteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CommuteIcon.Style = SvgIcon;
CommuteIcon.displayName = 'CommuteIcon';

export default CommuteIcon
