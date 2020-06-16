import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RotateLeftIconSvg from '../../assets/Image/rotate_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RotateLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RotateLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RotateLeftIcon.Style = SvgIcon;
RotateLeftIcon.displayName = 'RotateLeftIcon';

export default RotateLeftIcon
