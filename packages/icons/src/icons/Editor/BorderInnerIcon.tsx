import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderInnerIconSvg from '../../assets/Editor/border_inner_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderInnerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderInnerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderInnerIcon.Style = SvgIcon;
BorderInnerIcon.displayName = 'BorderInnerIcon';

export default BorderInnerIcon
