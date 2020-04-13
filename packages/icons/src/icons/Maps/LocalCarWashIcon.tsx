import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalCarWashIconSvg from '../../assets/Maps/local_car_wash_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalCarWashIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalCarWashIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalCarWashIcon.Style = SvgIcon;
LocalCarWashIcon.displayName = 'LocalCarWashIcon';

export default LocalCarWashIcon
