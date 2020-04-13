import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowRightAltIconSvg from '../../assets/Action/arrow_right_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowRightAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowRightAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowRightAltIcon.Style = SvgIcon;
ArrowRightAltIcon.displayName = 'ArrowRightAltIcon';

export default ArrowRightAltIcon
