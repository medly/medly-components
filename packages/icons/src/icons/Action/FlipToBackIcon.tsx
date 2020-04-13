import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlipToBackIconSvg from '../../assets/Action/flip_to_back_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlipToBackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlipToBackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlipToBackIcon.Style = SvgIcon;
FlipToBackIcon.displayName = 'FlipToBackIcon';

export default FlipToBackIcon
