import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1761294LineIconSvg from '../../assets/GSDD/SideEffect_1761_294_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1761294LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect1761294LineIcon';

const SideEffect1761294LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SideEffect1761294LineIcon
