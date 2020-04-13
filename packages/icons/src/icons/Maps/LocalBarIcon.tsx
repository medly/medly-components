import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalBarIconSvg from '../../assets/Maps/local_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalBarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalBarIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalBarIcon.Style = SvgIcon;
LocalBarIcon.displayName = 'LocalBarIcon';

export default LocalBarIcon
