import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Looks6IconSvg from '../../assets/Image/looks_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks6Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Looks6IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Looks6Icon.Style = SvgIcon;
Looks6Icon.displayName = 'Looks6Icon';

export default Looks6Icon
