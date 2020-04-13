import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReplyIconSvg from '../../assets/Content/reply_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReplyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReplyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReplyIcon.Style = SvgIcon;
ReplyIcon.displayName = 'ReplyIcon';

export default ReplyIcon
