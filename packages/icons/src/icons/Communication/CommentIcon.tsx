import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CommentIconSvg from '../../assets/Communication/comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CommentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CommentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CommentIcon.Style = SvgIcon;
CommentIcon.displayName = 'CommentIcon';

export default CommentIcon
