import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FastRewindIconSvg from '../../assets/Media/fast_rewind_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FastRewindIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FastRewindIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FastRewindIcon.Style = SvgIcon;
FastRewindIcon.displayName = 'FastRewindIcon';

export default FastRewindIcon
