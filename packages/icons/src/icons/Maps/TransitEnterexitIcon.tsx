import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TransitEnterexitIconSvg from '../../assets/Maps/transit_enterexit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TransitEnterexitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'TransitEnterexitIcon';

const TransitEnterexitIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default TransitEnterexitIcon
