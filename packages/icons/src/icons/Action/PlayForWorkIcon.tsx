import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlayForWorkIconSvg from '../../assets/Action/play_for_work_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayForWorkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlayForWorkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlayForWorkIcon.Style = SvgIcon;
PlayForWorkIcon.displayName = 'PlayForWorkIcon';

export default PlayForWorkIcon
