import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckSvg from '../assets/Check.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const CheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckIcon.Style = SvgIcon;
CheckIcon.displayName = 'CheckIcon';
