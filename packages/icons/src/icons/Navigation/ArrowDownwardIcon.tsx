import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDownwardIconSvg from '../../assets/Navigation/arrow_downward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDownwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowDownwardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowDownwardIcon.Style = SvgIcon;
ArrowDownwardIcon.displayName = 'ArrowDownwardIcon';

export default ArrowDownwardIcon
