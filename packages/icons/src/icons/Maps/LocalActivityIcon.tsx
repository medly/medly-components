import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalActivityIconSvg from '../../assets/Maps/local_activity_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalActivityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalActivityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalActivityIcon.Style = SvgIcon;
LocalActivityIcon.displayName = 'LocalActivityIcon';

export default LocalActivityIcon
