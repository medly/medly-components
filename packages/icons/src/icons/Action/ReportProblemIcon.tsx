import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportProblemIconSvg from '../../assets/Action/report_problem_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportProblemIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReportProblemIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReportProblemIcon.Style = SvgIcon;
ReportProblemIcon.displayName = 'ReportProblemIcon';

export default ReportProblemIcon
