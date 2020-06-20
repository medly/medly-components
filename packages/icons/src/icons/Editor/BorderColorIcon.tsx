import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderColorIconSvg from '../../assets/Editor/border_color_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderColorIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderColorIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderColorIcon.Style = SvgIcon;
BorderColorIcon.displayName = 'BorderColorIcon';

export default BorderColorIcon
