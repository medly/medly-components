import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CheckCircleOutlineIconSvg from '../../assets/Action/check_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckCircleOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckCircleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckCircleOutlineIcon.Style = SvgIcon;
CheckCircleOutlineIcon.displayName = 'CheckCircleOutlineIcon';

export default CheckCircleOutlineIcon
