import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandMoreSvg from '../assets/ExpandMore.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const ExpandMoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExpandMoreSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';
