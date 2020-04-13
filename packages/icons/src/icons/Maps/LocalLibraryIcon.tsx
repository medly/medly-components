import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalLibraryIconSvg from '../../assets/Maps/local_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalLibraryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalLibraryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalLibraryIcon.Style = SvgIcon;
LocalLibraryIcon.displayName = 'LocalLibraryIcon';

export default LocalLibraryIcon
