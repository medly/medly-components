import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExclamationCircleSvg from '../assets/ExclamationCircle.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ExclamationCircleIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExclamationCircleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExclamationCircleIcon.Style = SvgIcon;
ExclamationCircleIcon.displayName = 'ExclamationCircleIcon';
