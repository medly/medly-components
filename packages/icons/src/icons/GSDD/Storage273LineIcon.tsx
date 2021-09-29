import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage273LineIconSvg from '../../assets/GSDD/Storage_273_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage273LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Storage273LineIcon';

const Storage273LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Storage273LineIcon
