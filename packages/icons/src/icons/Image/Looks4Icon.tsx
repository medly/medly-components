import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Looks4IconSvg from '../../assets/Image/looks_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks4Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Looks4IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Looks4Icon.Style = SvgIcon;
Looks4Icon.displayName = 'Looks4Icon';

export default Looks4Icon
