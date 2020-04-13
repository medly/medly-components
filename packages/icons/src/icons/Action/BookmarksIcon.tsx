import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BookmarksIconSvg from '../../assets/Action/bookmarks_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarksIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BookmarksIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BookmarksIcon.Style = SvgIcon;
BookmarksIcon.displayName = 'BookmarksIcon';

export default BookmarksIcon
