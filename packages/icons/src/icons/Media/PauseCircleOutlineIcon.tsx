import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PauseCircleOutlineIconSvg from '../../assets/Media/pause_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PauseCircleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PauseCircleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PauseCircleOutlineIcon.Style = SvgIcon;
PauseCircleOutlineIcon.displayName = 'PauseCircleOutlineIcon';

export default PauseCircleOutlineIcon
