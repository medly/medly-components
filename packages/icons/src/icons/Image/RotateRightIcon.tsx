import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RotateRightIconSvg from '../../assets/Image/rotate_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RotateRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RotateRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RotateRightIcon.Style = SvgIcon;
RotateRightIcon.displayName = 'RotateRightIcon';

export default RotateRightIcon
