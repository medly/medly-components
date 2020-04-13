import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GradeIconSvg from '../../assets/Action/grade_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GradeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GradeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GradeIcon.Style = SvgIcon;
GradeIcon.displayName = 'GradeIcon';

export default GradeIcon
