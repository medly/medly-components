import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Looks3IconSvg from '../../assets/Image/looks_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks3Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Looks3IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Looks3Icon.Style = SvgIcon;
Looks3Icon.displayName = 'Looks3Icon';

export default Looks3Icon
