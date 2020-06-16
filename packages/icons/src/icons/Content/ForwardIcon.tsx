import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ForwardIconSvg from '../../assets/Content/forward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ForwardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ForwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ForwardIcon.Style = SvgIcon;
ForwardIcon.displayName = 'ForwardIcon';

export default ForwardIcon
