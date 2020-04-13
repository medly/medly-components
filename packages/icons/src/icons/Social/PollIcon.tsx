import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PollIconSvg from '../../assets/Social/poll_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PollIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PollIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PollIcon.Style = SvgIcon;
PollIcon.displayName = 'PollIcon';

export default PollIcon
