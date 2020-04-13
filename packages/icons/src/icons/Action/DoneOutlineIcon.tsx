import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoneOutlineIconSvg from '../../assets/Action/done_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoneOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DoneOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DoneOutlineIcon.Style = SvgIcon;
DoneOutlineIcon.displayName = 'DoneOutlineIcon';

export default DoneOutlineIcon
