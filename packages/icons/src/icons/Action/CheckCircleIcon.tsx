import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckCircleIconSvg from '../../assets/Action/check_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckCircleIcon.Style = SvgIcon;
CheckCircleIcon.displayName = 'CheckCircleIcon';

export default CheckCircleIcon
