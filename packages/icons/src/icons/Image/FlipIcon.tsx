import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlipIconSvg from '../../assets/Image/flip_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlipIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlipIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlipIcon.Style = SvgIcon;
FlipIcon.displayName = 'FlipIcon';

export default FlipIcon
