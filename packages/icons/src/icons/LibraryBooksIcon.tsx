import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryBooksIconSvg from '../assets/LibraryBooks.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const LibraryBooksIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LibraryBooksIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LibraryBooksIcon.Style = SvgIcon;
LibraryBooksIcon.displayName = 'LibraryBooksIcon';

export default LibraryBooksIcon
