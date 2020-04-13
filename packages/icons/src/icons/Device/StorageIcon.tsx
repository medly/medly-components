import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StorageIconSvg from '../../assets/Device/storage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StorageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StorageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StorageIcon.Style = SvgIcon;
StorageIcon.displayName = 'StorageIcon';

export default StorageIcon
