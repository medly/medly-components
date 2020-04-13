import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NavigationIconSvg from '../../assets/Maps/navigation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NavigationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NavigationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NavigationIcon.Style = SvgIcon;
NavigationIcon.displayName = 'NavigationIcon';

export default NavigationIcon
