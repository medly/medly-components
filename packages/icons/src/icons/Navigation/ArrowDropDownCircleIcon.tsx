import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowDropDownCircleIconSvg from '../../assets/Navigation/arrow_drop_down_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDropDownCircleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDropDownCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowDropDownCircleIcon.Style = SvgIcon;
ArrowDropDownCircleIcon.displayName = 'ArrowDropDownCircleIcon';

export default ArrowDropDownCircleIcon
