import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StoreIconSvg from '../../assets/Action/store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StoreIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StoreIcon.Style = SvgIcon;
StoreIcon.displayName = 'StoreIcon';

export default StoreIcon
