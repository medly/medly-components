import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PoolIconSvg from '../../assets/Places/pool_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PoolIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PoolIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PoolIcon.Style = SvgIcon;
PoolIcon.displayName = 'PoolIcon';

export default PoolIcon
