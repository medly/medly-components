import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StoreMallDirectoryIconSvg from '../../assets/Maps/store_mall_directory_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StoreMallDirectoryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StoreMallDirectoryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StoreMallDirectoryIcon.Style = SvgIcon;
StoreMallDirectoryIcon.displayName = 'StoreMallDirectoryIcon';

export default StoreMallDirectoryIcon
