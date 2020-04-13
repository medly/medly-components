import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryBooksIconSvg from '../../assets/Media/library_books_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LibraryBooksIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LibraryBooksIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LibraryBooksIcon.Style = SvgIcon;
LibraryBooksIcon.displayName = 'LibraryBooksIcon';

export default LibraryBooksIcon
