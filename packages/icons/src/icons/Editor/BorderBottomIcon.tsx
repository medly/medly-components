import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderBottomIconSvg from '../../assets/Editor/border_bottom_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderBottomIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderBottomIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderBottomIcon.Style = SvgIcon;
BorderBottomIcon.displayName = 'BorderBottomIcon';

export default BorderBottomIcon
