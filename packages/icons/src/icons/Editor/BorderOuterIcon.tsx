import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderOuterIconSvg from '../../assets/Editor/border_outer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderOuterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderOuterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderOuterIcon.Style = SvgIcon;
BorderOuterIcon.displayName = 'BorderOuterIcon';

export default BorderOuterIcon
