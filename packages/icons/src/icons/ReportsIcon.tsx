import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportsSvg from '../assets/Reports.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const ReportsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReportsSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReportsIcon.Style = SvgIcon;
ReportsIcon.displayName = 'ReportsIcon';
