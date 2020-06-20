import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowRightIconSvg from '../../assets/Navigation/arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowRightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowRightIcon.Style = SvgIcon;
ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon
