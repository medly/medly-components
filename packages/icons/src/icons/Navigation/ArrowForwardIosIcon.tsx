import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowForwardIosIconSvg from '../../assets/Navigation/arrow_forward_ios_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowForwardIosIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowForwardIosIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowForwardIosIcon.Style = SvgIcon;
ArrowForwardIosIcon.displayName = 'ArrowForwardIosIcon';

export default ArrowForwardIosIcon
