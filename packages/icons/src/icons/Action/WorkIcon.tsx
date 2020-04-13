import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WorkIconSvg from '../../assets/Action/work_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WorkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WorkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WorkIcon.Style = SvgIcon;
WorkIcon.displayName = 'WorkIcon';

export default WorkIcon
