import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrainIconSvg from '../../assets/Maps/train_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TrainIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TrainIcon.Style = SvgIcon;
TrainIcon.displayName = 'TrainIcon';

export default TrainIcon
