import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssessmentIconSvg from '../../assets/Action/assessment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssessmentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssessmentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssessmentIcon.Style = SvgIcon;
AssessmentIcon.displayName = 'AssessmentIcon';

export default AssessmentIcon
