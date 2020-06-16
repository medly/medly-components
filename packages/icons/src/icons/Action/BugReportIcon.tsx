import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BugReportIconSvg from '../../assets/Action/bug_report_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BugReportIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BugReportIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BugReportIcon.Style = SvgIcon;
BugReportIcon.displayName = 'BugReportIcon';

export default BugReportIcon
