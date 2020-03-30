import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilitySvg from '../assets/Visibility.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const VisibilityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VisibilitySvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VisibilityIcon.Style = SvgIcon;
VisibilityIcon.displayName = 'VisibilityIcon';
