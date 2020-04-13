import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportIconSvg from '../../assets/Content/report_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReportIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReportIcon.Style = SvgIcon;
ReportIcon.displayName = 'ReportIcon';

export default ReportIcon
