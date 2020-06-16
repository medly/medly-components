import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RemoveRedEyeIconSvg from '../../assets/Image/remove_red_eye_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveRedEyeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RemoveRedEyeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RemoveRedEyeIcon.Style = SvgIcon;
RemoveRedEyeIcon.displayName = 'RemoveRedEyeIcon';

export default RemoveRedEyeIcon
