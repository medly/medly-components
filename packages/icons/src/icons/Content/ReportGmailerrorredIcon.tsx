import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportGmailerrorredIconSvg from '../../assets/Content/report_gmailerrorred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportGmailerrorredIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReportGmailerrorredIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReportGmailerrorredIcon.Style = SvgIcon;
ReportGmailerrorredIcon.displayName = 'ReportGmailerrorredIcon';

export default ReportGmailerrorredIcon
