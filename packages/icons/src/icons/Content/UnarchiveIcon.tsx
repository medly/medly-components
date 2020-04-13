import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UnarchiveIconSvg from '../../assets/Content/unarchive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnarchiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UnarchiveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UnarchiveIcon.Style = SvgIcon;
UnarchiveIcon.displayName = 'UnarchiveIcon';

export default UnarchiveIcon
