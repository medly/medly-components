import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter9IconSvg from '../../assets/Image/filter_9_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter9IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Filter9Icon';

const Filter9Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Filter9Icon
