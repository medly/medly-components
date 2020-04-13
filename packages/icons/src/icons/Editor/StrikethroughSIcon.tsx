import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StrikethroughSIconSvg from '../../assets/Editor/strikethrough_s_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StrikethroughSIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StrikethroughSIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StrikethroughSIcon.Style = SvgIcon;
StrikethroughSIcon.displayName = 'StrikethroughSIcon';

export default StrikethroughSIcon
