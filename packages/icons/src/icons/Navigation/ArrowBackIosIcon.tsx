import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowBackIosIconSvg from '../../assets/Navigation/arrow_back_ios_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowBackIosIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowBackIosIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowBackIosIcon.Style = SvgIcon;
ArrowBackIosIcon.displayName = 'ArrowBackIosIcon';

export default ArrowBackIosIcon
