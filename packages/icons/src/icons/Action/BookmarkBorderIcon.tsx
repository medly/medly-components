import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BookmarkBorderIconSvg from '../../assets/Action/bookmark_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarkBorderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BookmarkBorderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BookmarkBorderIcon.Style = SvgIcon;
BookmarkBorderIcon.displayName = 'BookmarkBorderIcon';

export default BookmarkBorderIcon
