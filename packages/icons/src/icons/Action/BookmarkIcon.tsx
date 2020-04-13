import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BookmarkIconSvg from '../../assets/Action/bookmark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BookmarkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BookmarkIcon.Style = SvgIcon;
BookmarkIcon.displayName = 'BookmarkIcon';

export default BookmarkIcon
