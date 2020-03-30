import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownArrowSvg from '../assets/DownArrow.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const DownArrowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DownArrowSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DownArrowIcon.Style = SvgIcon;
DownArrowIcon.displayName = 'DownArrowIcon';
