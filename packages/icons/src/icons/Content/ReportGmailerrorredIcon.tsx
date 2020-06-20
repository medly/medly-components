import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReportGmailerrorredIconSvg from '../../assets/Content/report_gmailerrorred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReportGmailerrorredIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReportGmailerrorredIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReportGmailerrorredIcon.Style = SvgIcon;
ReportGmailerrorredIcon.displayName = 'ReportGmailerrorredIcon';

export default ReportGmailerrorredIcon
