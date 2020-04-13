import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowUpwardIconSvg from '../../assets/Navigation/arrow_upward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowUpwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowUpwardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowUpwardIcon.Style = SvgIcon;
ArrowUpwardIcon.displayName = 'ArrowUpwardIcon';

export default ArrowUpwardIcon
