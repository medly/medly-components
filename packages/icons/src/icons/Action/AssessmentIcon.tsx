import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssessmentIconSvg from '../../assets/Action/assessment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssessmentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssessmentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssessmentIcon.Style = SvgIcon;
AssessmentIcon.displayName = 'AssessmentIcon';

export default AssessmentIcon
