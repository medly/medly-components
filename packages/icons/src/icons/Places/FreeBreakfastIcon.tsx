import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FreeBreakfastIconSvg from '../../assets/Places/free_breakfast_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FreeBreakfastIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FreeBreakfastIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FreeBreakfastIcon.Style = SvgIcon;
FreeBreakfastIcon.displayName = 'FreeBreakfastIcon';

export default FreeBreakfastIcon
