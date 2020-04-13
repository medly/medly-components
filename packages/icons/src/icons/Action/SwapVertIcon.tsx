import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapVertIconSvg from '../../assets/Action/swap_vert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapVertIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SwapVertIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SwapVertIcon.Style = SvgIcon;
SwapVertIcon.displayName = 'SwapVertIcon';

export default SwapVertIcon
