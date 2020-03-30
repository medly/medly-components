import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HelpSvg from '../assets/Help.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const HelpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HelpSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HelpIcon.Style = SvgIcon;
HelpIcon.displayName = 'HelpIcon';
