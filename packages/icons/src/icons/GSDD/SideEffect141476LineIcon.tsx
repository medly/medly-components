import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect141476LineIconSvg from '../../assets/GSDD/SideEffect_1414_76_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect141476LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect141476LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect141476LineIcon.Style = SvgIcon;
SideEffect141476LineIcon.displayName = 'SideEffect141476LineIcon';

export default SideEffect141476LineIcon
