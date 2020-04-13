import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HelpIconSvg from '../../assets/Forms/Help.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HelpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HelpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HelpIcon.Style = SvgIcon;
HelpIcon.displayName = 'HelpIcon';

export default HelpIcon
