import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DepartureBoardIconSvg from '../../assets/Maps/departure_board_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DepartureBoardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DepartureBoardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DepartureBoardIcon.Style = SvgIcon;
DepartureBoardIcon.displayName = 'DepartureBoardIcon';

export default DepartureBoardIcon
