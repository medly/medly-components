import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CheckBoxOutlineBlankIconSvg from '../../assets/Toggle/check_box_outline_blank_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckBoxOutlineBlankIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckBoxOutlineBlankIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckBoxOutlineBlankIcon.Style = SvgIcon;
CheckBoxOutlineBlankIcon.displayName = 'CheckBoxOutlineBlankIcon';

export default CheckBoxOutlineBlankIcon
