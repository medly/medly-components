import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BookIconSvg from '../../assets/Action/book_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BookIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BookIcon.Style = SvgIcon;
BookIcon.displayName = 'BookIcon';

export default BookIcon
