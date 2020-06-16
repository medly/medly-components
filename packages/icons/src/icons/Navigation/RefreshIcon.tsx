import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RefreshIconSvg from '../../assets/Navigation/refresh_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RefreshIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RefreshIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RefreshIcon.Style = SvgIcon;
RefreshIcon.displayName = 'RefreshIcon';

export default RefreshIcon
