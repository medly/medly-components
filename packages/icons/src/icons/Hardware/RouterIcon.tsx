import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouterIconSvg from '../../assets/Hardware/router_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouterIcon.Style = SvgIcon;
RouterIcon.displayName = 'RouterIcon';

export default RouterIcon
