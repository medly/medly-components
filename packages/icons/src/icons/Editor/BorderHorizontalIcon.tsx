import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderHorizontalIconSvg from '../../assets/Editor/border_horizontal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderHorizontalIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderHorizontalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderHorizontalIcon.Style = SvgIcon;
BorderHorizontalIcon.displayName = 'BorderHorizontalIcon';

export default BorderHorizontalIcon
