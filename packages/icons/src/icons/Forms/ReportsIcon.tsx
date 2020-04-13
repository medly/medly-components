import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportsIconSvg from '../../assets/Forms/Reports.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReportsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReportsIcon.Style = SvgIcon;
ReportsIcon.displayName = 'ReportsIcon';

export default ReportsIcon
