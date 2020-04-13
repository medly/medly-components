import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DonutSmallIconSvg from '../../assets/Action/donut_small_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DonutSmallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DonutSmallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DonutSmallIcon.Style = SvgIcon;
DonutSmallIcon.displayName = 'DonutSmallIcon';

export default DonutSmallIcon
