import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GolfCourseIconSvg from '../../assets/Places/golf_course_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GolfCourseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GolfCourseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GolfCourseIcon.Style = SvgIcon;
GolfCourseIcon.displayName = 'GolfCourseIcon';

export default GolfCourseIcon
