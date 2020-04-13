import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HomeIconSvg from '../../assets/Action/home_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HomeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HomeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HomeIcon.Style = SvgIcon;
HomeIcon.displayName = 'HomeIcon';

export default HomeIcon
