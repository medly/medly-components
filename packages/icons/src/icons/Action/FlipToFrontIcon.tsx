import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlipToFrontIconSvg from '../../assets/Action/flip_to_front_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlipToFrontIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlipToFrontIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlipToFrontIcon.Style = SvgIcon;
FlipToFrontIcon.displayName = 'FlipToFrontIcon';

export default FlipToFrontIcon
