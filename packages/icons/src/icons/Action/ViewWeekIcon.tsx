import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewWeekIconSvg from '../../assets/Action/view_week_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewWeekIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewWeekIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewWeekIcon.Style = SvgIcon;
ViewWeekIcon.displayName = 'ViewWeekIcon';

export default ViewWeekIcon
