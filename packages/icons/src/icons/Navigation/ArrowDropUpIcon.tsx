import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDropUpIconSvg from '../../assets/Navigation/arrow_drop_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDropUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowDropUpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowDropUpIcon.Style = SvgIcon;
ArrowDropUpIcon.displayName = 'ArrowDropUpIcon';

export default ArrowDropUpIcon
