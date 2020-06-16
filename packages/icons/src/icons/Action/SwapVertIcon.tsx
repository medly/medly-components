import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SwapVertIconSvg from '../../assets/Action/swap_vert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapVertIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapVertIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwapVertIcon.Style = SvgIcon;
SwapVertIcon.displayName = 'SwapVertIcon';

export default SwapVertIcon
