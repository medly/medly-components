import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddCommentIconSvg from '../../assets/Editor/add_comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCommentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddCommentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddCommentIcon.Style = SvgIcon;
AddCommentIcon.displayName = 'AddCommentIcon';

export default AddCommentIcon
