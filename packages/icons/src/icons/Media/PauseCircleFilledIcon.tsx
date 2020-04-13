import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PauseCircleFilledIconSvg from '../../assets/Media/pause_circle_filled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PauseCircleFilledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PauseCircleFilledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PauseCircleFilledIcon.Style = SvgIcon;
PauseCircleFilledIcon.displayName = 'PauseCircleFilledIcon';

export default PauseCircleFilledIcon
