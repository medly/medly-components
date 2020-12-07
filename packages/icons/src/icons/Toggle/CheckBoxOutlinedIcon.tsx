import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CheckBoxOutlinedIconSvg from '../../assets/Toggle/check_box_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckBoxOutlinedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckBoxOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckBoxOutlinedIcon.Style = SvgIcon;
CheckBoxOutlinedIcon.displayName = 'CheckBoxOutlinedIcon';

export default CheckBoxOutlinedIcon
