import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalFloristIconSvg from '../../assets/Maps/local_florist_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalFloristIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalFloristIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalFloristIcon.Style = SvgIcon;
LocalFloristIcon.displayName = 'LocalFloristIcon';

export default LocalFloristIcon
