import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WhatshotIconSvg from '../../assets/Social/whatshot_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WhatshotIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WhatshotIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WhatshotIcon.Style = SvgIcon;
WhatshotIcon.displayName = 'WhatshotIcon';

export default WhatshotIcon
