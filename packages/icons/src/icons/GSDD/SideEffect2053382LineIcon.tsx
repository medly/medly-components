import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2053382LineIconSvg from '../../assets/GSDD/SideEffect_2053_382_Line._svg.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2053382LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect2053382LineIcon';

const SideEffect2053382LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect2053382LineIcon;
