import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReportOffIconSvg from '../../assets/Content/report_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReportOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReportOffIcon.Style = SvgIcon;
ReportOffIcon.displayName = 'ReportOffIcon';

export default ReportOffIcon
