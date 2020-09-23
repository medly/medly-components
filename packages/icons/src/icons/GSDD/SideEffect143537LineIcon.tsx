import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect143537LineIconSvg from '../../assets/GSDD/SideEffect_1435_37_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect143537LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect143537LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect143537LineIcon.Style = SvgIcon;
SideEffect143537LineIcon.displayName = 'SideEffect143537LineIcon';

export default SideEffect143537LineIcon
