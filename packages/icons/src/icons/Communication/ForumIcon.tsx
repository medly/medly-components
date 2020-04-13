import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ForumIconSvg from '../../assets/Communication/forum_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ForumIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ForumIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ForumIcon.Style = SvgIcon;
ForumIcon.displayName = 'ForumIcon';

export default ForumIcon
