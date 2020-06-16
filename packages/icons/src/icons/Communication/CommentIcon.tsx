import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CommentIconSvg from '../../assets/Communication/comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CommentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CommentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CommentIcon.Style = SvgIcon;
CommentIcon.displayName = 'CommentIcon';

export default CommentIcon
