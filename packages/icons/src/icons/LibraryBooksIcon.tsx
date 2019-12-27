import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryBooksSvg from '../assets/LibraryBooks.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const LibraryBooksIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LibraryBooksSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LibraryBooksIcon.Style = SvgIcon;
LibraryBooksIcon.displayName = 'LibraryBooksIcon';
