import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDropUpIconSvg from '../../assets/Navigation/arrow_drop_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDropUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDropUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowDropUpIcon.Style = SvgIcon;
ArrowDropUpIcon.displayName = 'ArrowDropUpIcon';

export default ArrowDropUpIcon
