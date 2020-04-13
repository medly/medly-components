import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubjectIconSvg from '../../assets/Action/subject_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubjectIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SubjectIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SubjectIcon.Style = SvgIcon;
SubjectIcon.displayName = 'SubjectIcon';

export default SubjectIcon
