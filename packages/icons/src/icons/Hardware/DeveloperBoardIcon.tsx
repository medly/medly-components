import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeveloperBoardIconSvg from '../../assets/Hardware/developer_board_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeveloperBoardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DeveloperBoardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DeveloperBoardIcon.Style = SvgIcon;
DeveloperBoardIcon.displayName = 'DeveloperBoardIcon';

export default DeveloperBoardIcon
