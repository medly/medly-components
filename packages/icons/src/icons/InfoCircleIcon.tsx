import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InfoCircleSvg from '../assets/InfoCircle.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const InfoCircleIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InfoCircleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InfoCircleIcon.Style = SvgIcon;
InfoCircleIcon.displayName = 'InfoCircleIcon';
