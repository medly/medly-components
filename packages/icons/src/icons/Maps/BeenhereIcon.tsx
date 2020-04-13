import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BeenhereIconSvg from '../../assets/Maps/beenhere_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BeenhereIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BeenhereIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BeenhereIcon.Style = SvgIcon;
BeenhereIcon.displayName = 'BeenhereIcon';

export default BeenhereIcon
