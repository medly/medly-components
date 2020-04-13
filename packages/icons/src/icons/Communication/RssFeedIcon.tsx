import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RssFeedIconSvg from '../../assets/Communication/rss_feed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RssFeedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RssFeedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RssFeedIcon.Style = SvgIcon;
RssFeedIcon.displayName = 'RssFeedIcon';

export default RssFeedIcon
