import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapHorizIconSvg from '../../assets/Action/swap_horiz_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapHorizIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SwapHorizIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SwapHorizIcon.Style = SvgIcon;
SwapHorizIcon.displayName = 'SwapHorizIcon';

export default SwapHorizIcon
