import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FeedbackIconSvg from '../../assets/Action/feedback_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FeedbackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FeedbackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FeedbackIcon.Style = SvgIcon;
FeedbackIcon.displayName = 'FeedbackIcon';

export default FeedbackIcon
