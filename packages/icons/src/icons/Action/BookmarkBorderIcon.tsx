import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BookmarkBorderIconSvg from '../../assets/Action/bookmark_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarkBorderIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BookmarkBorderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BookmarkBorderIcon.Style = SvgIcon;
BookmarkBorderIcon.displayName = 'BookmarkBorderIcon';

export default BookmarkBorderIcon
