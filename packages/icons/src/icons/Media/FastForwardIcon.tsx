import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FastForwardIconSvg from '../../assets/Media/fast_forward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FastForwardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FastForwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FastForwardIcon.Style = SvgIcon;
FastForwardIcon.displayName = 'FastForwardIcon';

export default FastForwardIcon
