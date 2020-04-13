import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RssFeedIconSvg from '../../assets/Communication/rss_feed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RssFeedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RssFeedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RssFeedIcon.Style = SvgIcon;
RssFeedIcon.displayName = 'RssFeedIcon';

export default RssFeedIcon
