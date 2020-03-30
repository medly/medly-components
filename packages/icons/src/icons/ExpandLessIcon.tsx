import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandLessSvg from '../assets/ExpandLess.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const ExpandLessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExpandLessSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExpandLessIcon.Style = SvgIcon;
ExpandLessIcon.displayName = 'ExpandLessIcon';
