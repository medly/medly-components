import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WorkOffIconSvg from '../../assets/Action/work_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WorkOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WorkOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WorkOffIcon.Style = SvgIcon;
WorkOffIcon.displayName = 'WorkOffIcon';

export default WorkOffIcon
