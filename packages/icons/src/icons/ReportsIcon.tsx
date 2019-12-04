// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportsSvg from '../assets/Reports.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ReportsIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ReportsSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ReportsIcon.Style = SvgIcon;
ReportsIcon.displayName = 'ReportsIcon';
