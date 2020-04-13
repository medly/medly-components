import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RoundedCornerIconSvg from '../../assets/Action/rounded_corner_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RoundedCornerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RoundedCornerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RoundedCornerIcon.Style = SvgIcon;
RoundedCornerIcon.displayName = 'RoundedCornerIcon';

export default RoundedCornerIcon
