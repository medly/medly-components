import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertCommentIconSvg from '../../assets/Editor/insert_comment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertCommentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertCommentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertCommentIcon.Style = SvgIcon;
InsertCommentIcon.displayName = 'InsertCommentIcon';

export default InsertCommentIcon
