import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ModeCommentIconSvg from '../../assets/Editor/mode_comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ModeCommentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ModeCommentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ModeCommentIcon.Style = SvgIcon;
ModeCommentIcon.displayName = 'ModeCommentIcon';

export default ModeCommentIcon
