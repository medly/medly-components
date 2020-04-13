import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BugReportIconSvg from '../../assets/Action/bug_report_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BugReportIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BugReportIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BugReportIcon.Style = SvgIcon;
BugReportIcon.displayName = 'BugReportIcon';

export default BugReportIcon
