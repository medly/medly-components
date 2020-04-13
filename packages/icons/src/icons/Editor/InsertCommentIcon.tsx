import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertCommentIconSvg from '../../assets/Editor/insert_comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertCommentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertCommentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertCommentIcon.Style = SvgIcon;
InsertCommentIcon.displayName = 'InsertCommentIcon';

export default InsertCommentIcon
