import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3205164LineIconSvg from '../../assets/GSDD/SideEffect_3205_164_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3205164LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect3205164LineIcon';

const SideEffect3205164LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SideEffect3205164LineIcon
