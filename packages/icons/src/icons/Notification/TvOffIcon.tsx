import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TvOffIconSvg from '../../assets/Notification/tv_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TvOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TvOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TvOffIcon.Style = SvgIcon;
TvOffIcon.displayName = 'TvOffIcon';

export default TvOffIcon
