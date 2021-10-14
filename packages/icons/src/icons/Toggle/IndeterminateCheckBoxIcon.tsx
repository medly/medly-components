import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import IndeterminateCheckBoxIconSvg from '../../assets/Toggle/indeterminate_check_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <IndeterminateCheckBoxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'IndeterminateCheckBoxIcon';

const IndeterminateCheckBoxIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default IndeterminateCheckBoxIcon;
