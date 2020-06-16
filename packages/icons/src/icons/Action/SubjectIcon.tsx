import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SubjectIconSvg from '../../assets/Action/subject_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubjectIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubjectIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SubjectIcon.Style = SvgIcon;
SubjectIcon.displayName = 'SubjectIcon';

export default SubjectIcon
