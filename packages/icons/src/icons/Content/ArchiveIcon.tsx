import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArchiveIconSvg from '../../assets/Content/archive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArchiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArchiveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArchiveIcon.Style = SvgIcon;
ArchiveIcon.displayName = 'ArchiveIcon';

export default ArchiveIcon
