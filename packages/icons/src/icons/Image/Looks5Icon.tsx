import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Looks5IconSvg from '../../assets/Image/looks_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Looks5IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Looks5Icon.Style = SvgIcon;
Looks5Icon.displayName = 'Looks5Icon';

export default Looks5Icon
