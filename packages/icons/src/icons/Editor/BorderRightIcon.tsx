import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderRightIconSvg from '../../assets/Editor/border_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderRightIcon.Style = SvgIcon;
BorderRightIcon.displayName = 'BorderRightIcon';

export default BorderRightIcon
