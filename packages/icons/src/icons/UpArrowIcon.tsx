import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UpArrowSvg from '../assets/UpArrow.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const UpArrowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UpArrowSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UpArrowIcon.Style = SvgIcon;
UpArrowIcon.displayName = 'UpArrowIcon';
