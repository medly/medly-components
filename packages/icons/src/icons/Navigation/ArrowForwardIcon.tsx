import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowForwardIconSvg from '../../assets/Navigation/arrow_forward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowForwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowForwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowForwardIcon.Style = SvgIcon;
ArrowForwardIcon.displayName = 'ArrowForwardIcon';

export default ArrowForwardIcon
