import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddCommentIconSvg from '../../assets/Editor/add_comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCommentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddCommentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddCommentIcon.Style = SvgIcon;
AddCommentIcon.displayName = 'AddCommentIcon';

export default AddCommentIcon
