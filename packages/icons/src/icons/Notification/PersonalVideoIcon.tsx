import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonalVideoIconSvg from '../../assets/Notification/personal_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonalVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonalVideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonalVideoIcon.Style = SvgIcon;
PersonalVideoIcon.displayName = 'PersonalVideoIcon';

export default PersonalVideoIcon
