import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BookmarkIconSvg from '../../assets/Action/bookmark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BookmarkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BookmarkIcon.Style = SvgIcon;
BookmarkIcon.displayName = 'BookmarkIcon';

export default BookmarkIcon
