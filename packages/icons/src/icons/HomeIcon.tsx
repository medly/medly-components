import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HomeIconSvg from '../assets/Home.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const HomeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HomeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HomeIcon.Style = SvgIcon;
HomeIcon.displayName = 'HomeIcon';

export default HomeIcon
