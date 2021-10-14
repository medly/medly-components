import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowDropUpIconSvg from '../../assets/Navigation/arrow_drop_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDropUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ArrowDropUpIcon';

const ArrowDropUpIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ArrowDropUpIcon;
