import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CakeIconSvg from '../../assets/Social/cake_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CakeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CakeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CakeIcon.Style = SvgIcon;
CakeIcon.displayName = 'CakeIcon';

export default CakeIcon
