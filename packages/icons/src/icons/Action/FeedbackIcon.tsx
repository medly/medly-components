import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FeedbackIconSvg from '../../assets/Action/feedback_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FeedbackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FeedbackIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FeedbackIcon.Style = SvgIcon;
FeedbackIcon.displayName = 'FeedbackIcon';

export default FeedbackIcon
