import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CheckBoxIconSvg from '../../assets/Toggle/check_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckBoxIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckBoxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckBoxIcon.Style = SvgIcon;
CheckBoxIcon.displayName = 'CheckBoxIcon';

export default CheckBoxIcon
