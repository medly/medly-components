import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryAddIconSvg from '../../assets/Media/library_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LibraryAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LibraryAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LibraryAddIcon.Style = SvgIcon;
LibraryAddIcon.displayName = 'LibraryAddIcon';

export default LibraryAddIcon
