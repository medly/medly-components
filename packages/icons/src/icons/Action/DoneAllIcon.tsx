import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoneAllIconSvg from '../../assets/Action/done_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoneAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DoneAllIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DoneAllIcon.Style = SvgIcon;
DoneAllIcon.displayName = 'DoneAllIcon';

export default DoneAllIcon
