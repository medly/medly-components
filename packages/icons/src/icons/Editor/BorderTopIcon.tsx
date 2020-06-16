import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderTopIconSvg from '../../assets/Editor/border_top_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderTopIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderTopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderTopIcon.Style = SvgIcon;
BorderTopIcon.displayName = 'BorderTopIcon';

export default BorderTopIcon
