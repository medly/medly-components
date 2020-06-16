import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowLeftIconSvg from '../../assets/Navigation/arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowLeftIcon.Style = SvgIcon;
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export default ArrowLeftIcon
